import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TextInput, Alert, ToastAndroid, ActivityIndicator, AsyncStorage } from 'react-native';

export default class Following extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
            id: -1
        }
    }
    setId = async (id) => {
        AsyncStorage.setItem('ID', id)
    }

    getId = () => {
        const id = this.state.id;
        const { navigate } = this.props.navigation;
        this.setId(id);
        navigate("FollowersList")
    }
    render() {
        return (
            <View>
                <TextInput placeholder="Enter Please enter their ID number" onChangeText={(id) => this.setState({ id: id })} underlineColorAndroid="transparent"></TextInput>
                <Text></Text>
                <Text></Text>
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
                <Button title="View" onPress={this.getId}></Button>
            </View>
        )
    }
}