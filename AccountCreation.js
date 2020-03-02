import React, { Component } from 'react';
import { Text, View, Button, TextInput,ToastAndroid } from 'react-native';


class AccountCreation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            given_name: '',
            family_name: '',
            email: '',
            password: '',
        };
    }

    setGivenName = (givenName) => {
        this.state.given_name = givenName
    }
    setFamilyName = (familyName) => {
        this.state.family_name = familyName
    }
    setEmail = (emailPassed) => {
        this.state.email = emailPassed
    }
    setPassword = (passwordPassed) => {
        this.state.password = passwordPassed
    }

    createAccount = () => {
        return fetch("http://10.0.2.2:3333/api/v0.0.5/user",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    given_name: this.state.given_name,
                    family_name: this.state.family_name,
                    email: this.state.email,
                    password: this.state.password
                })
            })
            .then((response) => {
                ToastAndroid.show('Creation of the account has been successful', ToastAndroid.SHORT);
                console.log(response)
            })
            .catch((error) => {
                ToastAndroid.show('ERROR Account Creation has failed', ToastAndroid.SHORT);
                console.log(error);
            });
    }
    render() {
        return (
            <View>
                <Text style={{ color: '#4094f0', textAlign: 'center', fontSize: 25 }}>Enter your details below</Text>
                <Text> </Text>
                <TextInput placeholder="First Name" onChangeText={this.setGivenName} underlineColorAndroid="transparent"></TextInput>
                <Text> </Text>
                <TextInput placeholder="Surname" onChangeText={this.setFamilyName} underlineColorAndroid="transparent"></TextInput>
                <Text> </Text>
                <TextInput placeholder="Email" onChangeText={this.setEmail} underlineColorAndroid="transparent"></TextInput>
                <Text> </Text>
                <TextInput placeholder="Password" onChangeText={this.setPassword} underlineColorAndroid="transparent"></TextInput>
                <Text> </Text>
                <Text> </Text>
                <Text> </Text>
                <Text> </Text>
                <Text> </Text>
                <Text> </Text>
                <Text> </Text>
                <Text> </Text>
                <Text> </Text>
                <Button title="Create Account" onPress={this.createAccount}/>
            </View>
        );
    }
}
export default AccountCreation;