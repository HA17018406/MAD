import React, { Component } from 'react';
import { Text, View, Button, TextInput, ToastAndroid, AsyncStorage } from 'react-native';

class UpdateUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            given_name: '',
            family_name: '',
            email: '',
            password: '',
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
    getId = async () => {
        try {
            const id = await AsyncStorage.getItem('id');
            console.log("Retrived the ID and it is: " + id)
            if (id !== null) {
                return (id)
            }
        }
        catch (error) {
            console.log(error)
        }
    };

    updateAccount = async () => {
        const token = await this.getToken();
        const tokenString = token.toString();
        const id = await this.getId();
        const url = 'http://10.0.2.2:3333/api/v0.0.5/user/' + id

        fetch(url,
            {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Authorization': "" + tokenString
                },
                body: JSON.stringify({
                    given_name: this.state.given_name,
                    family_name: this.state.family_name,
                    email: this.state.email,
                    password: this.state.password
                })
            })
            .then((response) => {
                ToastAndroid.show('Update of the account has been successful', ToastAndroid.SHORT);
                console.log(response)
            })
            .catch((error) => {
                ToastAndroid.show('ERROR Update has failed', ToastAndroid.SHORT);
                console.log(error);
            });
    }
    render() {
        return (
            <View>
                <Text style={{ color: '#4094f0', textAlign: 'center', fontSize: 25 }}>Update your details below</Text>
                <Text> </Text>
                <TextInput placeholder="First Name" onChangeText={(family_name) => this.setState({family_name: family_name})} underlineColorAndroid="transparent"></TextInput>
                <Text> </Text>
                <TextInput placeholder="Surname" onChangeText={(given_name) => this.setState({ given_name: given_name })} underlineColorAndroid="transparent"></TextInput>
                <Text> </Text>
                <TextInput placeholder="Email" onChangeText={(email) => this.setState({ email: email })} underlineColorAndroid="transparent"></TextInput>
                <Text> </Text>
                <TextInput secureTextEntry={true} placeholder="Password" onChangeText={(password) => this.setState({ password: password })} underlineColorAndroid="transparent"></TextInput>
                <Text> </Text>
                <Text> </Text>
                <Text> </Text>
                <Text> </Text>
                <Text> </Text>
                <Text> </Text>
                <Text> </Text>
                <Text> </Text>
                <Text> </Text>
                <Button title="Update Account" onPress={this.updateAccount} />
            </View>
        );
    }
}
export default UpdateUser;