import React, { Component } from 'react';
import { Text, View, Button, TextInput, Alert, PermissionsAndroid,ToastAndroid, ActivityIndicator, AsyncStorage, KeyboardAvoidingView, TouchableOpacity, ToolbarAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

export default class CreateChit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: '',
            chit_id: -1,
            timestamp: '',
            chit_content: '',
            location: {
                longitude: -1,
                latitude: -1
            },
            user: {
                user_id: -1,
                given_name: '',
                family_name: '',
                email: ''
            },
            locationPermission: false
        };
    }

    setLat = (latPassed) => {
        this.state.location.latitude = parseInt(latPassed);
    }
    setLong = (longPassed) => {
        this.state.location.longitude = parseInt(longPassed);
    }
    setGivenName = (givenName) => {
        this.state.user.given_name = givenName;
    }
    setFamilyName = (familyName) => {
        this.state.user.family_name = familyName;
    }
    setEmail = (emailPassed) => {
        this.state.user.email = emailPassed;
    }

    requestLocationPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
                title: 'Chit Location Permission',
                message:
                    'This app requires access to your location.',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',            });
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('You can access location');
                return true;
            } else {
                console.log('Location permission denied');
                return false;
            }
        }
        catch (error) {
            console.warn(error);
        }
    }

    findCoordinates = () => {
        if (!this.state.locationPermission) {
            this.state.locationPermission = this.requestLocationPermission();
        }
        Geolocation.getCurrentPosition(
            (position) => {
                const location = JSON.stringify(position);
                console.log(location);
                const locationJSON = JSON.parse(location);
                this.setLat(locationJSON.coords.latitude);
                this.setLong(locationJSON.coords.longitude);
                const lat = this.state.location.latitude;
                const stringlat = lat.toString();
                const long = this.state.location.longitude;
                const stringlong = long.toString();
                console.log("Lat is: " + stringlat)
                console.log("Long is: " + stringlong)
            },            (error) => {
                Alert.alert(error.message)
            }, {
            enableHighAccuracy: true, timeout: 20000, maximumAge: 1000
        });
    };

    componentDidMount = () => {
        this.findCoordinates();
    }

    getToken = async () => {
        try {
            const token = await AsyncStorage.getItem('Token');
            if (token !== null) {
                console.log("Retrived the Token and it is:" + token)
                return (token)
            }
        }
        catch (error) {
            console.log(error)
        }
    };
    getId = async () => {
        try {
            const id = await AsyncStorage.getItem('id');
            console.log("Retrived the ID and it is: " + id)
            if (id !== null) {
                this.state.user.user_id = parseInt(id);
                return (id)
            }
        }
        catch (error) {
            console.log(error)
        }
    };

    waitTimer = async () => {
        var token = await this.getToken();
        var id = await this.getId();
        this.setState({ token: token })
        this.createChit();
    }

    createChit = () => {
        const displayToken = this.state.token
        const { navigate } = this.props.navigation;
        fetch('http://10.0.2.2:3333/api/v0.0.5/chits',
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'X-Authorization': "" + displayToken
                },
                body: JSON.stringify({
                    chit_id: this.state.chit_id,
                    timestamp: this.state.timestamp,
                    chit_content: this.state.chit_content,
                    location: {
                        longitude: this.state.location.longitude,
                        latitude: this.state.location.latitude
                    },
                    user: {
                        user_id: this.state.user.user_id,
                        given_name: this.state.given_name,
                        family_name: this.state.family_name,
                        email: this.state.email
                    }
                })
            })
            .then((data) => {
                ToastAndroid.show("Posted Chit", ToastAndroid.SHORT)
            });

       
    }

    upload = () => {
        const { navigate } = this.props.navigation;
        navigate("UploadChit")
    }

    render() {
        return (
            <View>
                <Text style={{ color: 'turquoise', textAlign: 'center', fontSize: 25 }}>Post a chit</Text>
                <Text></Text>
                <TextInput placeholder="ID" onChangeText={(chit_id) => this.setState({ chit_id: parseInt(chit_id) })} underlineColorAndroid="transparent"></TextInput>
                <TextInput placeholder="Time Written" onChangeText={(timestamp) => this.setState({ timestamp: parseInt(timestamp) })} underlineColorAndroid="transparent"></TextInput>
                <TextInput placeholder="CHIT" onChangeText={(chit_content) => this.setState({ chit_content: chit_content })} underlineColorAndroid="transparent"></TextInput>
                <TextInput placeholder="Latitude" onChangeText={(latitude) => this.setLat(latitude)} underlineColorAndroid="transparent"></TextInput>
                <TextInput placeholder="Longitude" onChangeText={(longitude) => this.setLong(longitude)} underlineColorAndroid="transparent"></TextInput>
                <TextInput placeholder="First Name" onChangeText={(GivenName) => this.setGivenName(GivenName)} underlineColorAndroid="transparent"></TextInput>
                <TextInput placeholder="Surname" onChangeText={(FamilyName) => this.setFamilyName(FamilyName)} underlineColorAndroid="transparent"></TextInput>
                <TextInput placeholder="Email" onChangeText={(email) => this.setEmail(email)} underlineColorAndroid="transparent"></TextInput>
                <Button title="POST" color="turquoise" onPress={this.waitTimer} />
                <Text></Text>
                <Button title="Upload a Photo" color="turquoise" onPress={this.upload} />
            </View>
        )
    }
}