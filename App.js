import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TextInput, Alert, ToastAndroid, ActivityIndicator, AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Entrance from "./screens/Entrance.js";
import AccountCreation from "./screens/AccountCreation.js";
import Login from "./screens/Login.js";
import UserProfile from './screens/UserProfile.js';
import ChitsFeed from './screens/ChitsFeed.js';
import PostChit from './screens/PostChit.js';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function UserProfileTab() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Profile"
                component={UserProfile}
            />
            <Tab.Screen
                name="Feed"
                component={ChitsFeed}
            />
            <Tab.Screen
                name="CHIT"
                component={PostChit}
            />
        </Tab.Navigator>
    );
}

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
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ title: 'Login' }}
                />
                <Stack.Screen
                    name="UserProfile"
                    component={UserProfileTab}
                    options={{ title: 'Back to Login' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;
