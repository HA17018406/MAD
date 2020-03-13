import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TextInput, Alert, ToastAndroid, ActivityIndicator, AsyncStorage } from 'react-native';

export default class SingleSearch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            userID: -1
        }
    }
    storeId = (id) => {
        AsyncStorage.setItem('Single', id)
    }

    getId = () => {
        const id = this.state.id;
        const { navigate } = this.props.navigation;
        this.storeId(id);
        navigate("SingleSearchResults")
    }

    render() {
        return (
            <View>
                <Text style={{ color: '#4094f0', textAlign: 'center', fontSize: 25 }}>Search</Text>
                <Text></Text>
                <Text> </Text>
                <TextInput placeholder="Enter ID" onChangeText={(id) => this.setState({ id: id })} underlineColorAndroid="transparent"></TextInput>
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
                <Button title="Search" onPress={this.getId}></Button>
            </View>
        )
    }
}

