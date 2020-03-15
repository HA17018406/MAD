import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TextInput, Alert, ToastAndroid, ActivityIndicator, AsyncStorage, FlatList, Image } from 'react-native';

export default class ChitPhotoSecond extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: [],
            url: ''
        }
    }

    getId = async () => {
        try {
            const url = await AsyncStorage.getItem('ID')
            console.log("URL is: " + url)
            if (url !== null) {
                this.state.url = url;
                this.setState({ isLoading: false })
            }
        } catch (error) {
            console.log(error)
        }
    };

    componentDidMount = () => {
        this.getId();
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View>
                    <ActivityIndicator />
                </View>
            )
        }
        return (
            <View>
                <Image style={{ width: 100, height: 100 }} source={{ url: this.state.url }}></Image>
            </View>
        );
    }
}