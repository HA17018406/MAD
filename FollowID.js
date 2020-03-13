import React, { Component } from 'react';
import { Text, View, Button, TextInput, ToastAndroid, AsyncStorage } from 'react-native';

export default class FollowID extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: '',
            user_id: -1,
        };
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

    followID = async () => {
        const token = await this.getToken();
        const tokenString = token.toString();
        const id = this.state.user_id
        const url ='http://10.0.2.2:3333/api/v0.0.5/user/' + id + '/follow'

        fetch(url,
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'X-Authorization': "" + tokenString
                },
            })
            .then((response) => {
                ToastAndroid.show('User Followed', ToastAndroid.SHORT);
                console.log(response)
            })
            .catch((error) => {
                ToastAndroid.show('ERROR', ToastAndroid.SHORT);
                console.log(error);
            });
    }

    render() {
        return (
            <View>
                <Text style={{ color: '#4094f0', textAlign: 'center', fontSize: 25 }}>Follow a user</Text>
                <Text></Text>
                <Text> </Text>
                <TextInput placeholder="Please enter their ID number" onChangeText={(user_id) => this.setState({ user_id: parseInt(user_id) })} underlineColorAndroid="transparent"></TextInput>
                <Text> </Text>
                <Text> </Text>
                <Text> </Text>
                <Text> </Text>
                <Text> </Text>
                <Text> </Text>
                <Text> </Text>
                <Text> </Text>
                <Text> </Text>
                <Text> </Text>
                <Text> </Text>
                <Text> </Text>
                <Text> </Text>
                <Text> </Text>
                <Text> </Text>
                <Text> </Text>
                <Text> </Text>
                <Text> </Text>
                <Text> </Text>
                <Text> </Text>
                <Text> </Text>
                <Button title="Click to Follow" onPress={this.followID} />
            </View>
        )
    }
}
