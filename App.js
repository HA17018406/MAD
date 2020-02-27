import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TextInput, Alert, ToastAndroid, ActivityIndicator, AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Entrance from "./screens/Entrance.js";
import AccountCreation from "./screens/AccountCreation.js";

const Stack = createStackNavigator();

function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Entrance">
                <Stack.Screen
                    name="Entrance"
                    component={Entrance}
                    options={{ title: 'Entrance' }}
                />
                <Stack.Screen
                    name="AccountCreation"
                    component={AccountCreation}
                    options={{ title: 'AccountCreation' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;
