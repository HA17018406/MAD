//import React, { Component } from 'react';
//import { Text, View } from 'react-native';
//class EntranceScreen extends Component {
//    render() {
//        return (
//            <View>
//                <Text>Entrance Screen</Text>
//            </View>
//        );
//    }
//}
//export default EntranceScreen;


import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TextInput, Alert, ToastAndroid, ActivityIndicator, AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default class Welcome extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text> </Text>
                <Text style={{ color: '#4094f0', textAlign: 'center', fontSize: 25 }}>Welcome to Chittr</Text>
                <Text> </Text>
                <Button title="Create Account" onPress={() => navigate("AccountCreation")} />
            </View>
        )
    }
}
