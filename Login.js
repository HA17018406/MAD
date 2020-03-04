import React, { Component } from 'react';
import { Text, View, Button, TextInput } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    setEmail = (email) => {
        this.state.email = email
    }
    setPassword = (password) => {
        this.state.password = password
    }

    login = () => {
        const { navigate } = this.props.navigation;
        fetch('http://10.0.2.2:3333/api/v0.0.5/login',
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password
                })
            })

            .then(r => r.json())
            .then((returnJson) => {
                console.log(returnJson)
                navigate("UserProfile");
            });
    
    }

    render() {
        
        return (
            <View>
                <Text> </Text>
                <Text> </Text>
                <Text style={{ color: '#4094f0', textAlign: 'center', fontSize: 25 }}>Enter your Login Details below</Text>
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
                <Text> </Text>
                <Button title="Login" onPress={this.login}></Button>
     
                

            </View>
        )
    }


}
export default Login;