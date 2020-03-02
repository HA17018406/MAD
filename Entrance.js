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


const styles = StyleSheet.create({

    Mheading: {
        color: '#1e90ff',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center'
    }

});

export default class Welcome extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text> </Text>
                <Text style={styles.Mheading}> Welcome to Chittr </Text>
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
                <Button title="Create Account" onPress={() => navigate("AccountCreation")} />
                <Text> </Text>
                <Text> </Text>
                <Button title="Login" onPress={() => navigate("Login")} />
            </View>
        )
    }
}
