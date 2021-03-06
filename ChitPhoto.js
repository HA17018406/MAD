import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TextInput, Alert, ToastAndroid, ActivityIndicator, AsyncStorage, FlatList, TouchableWithoutFeedbackBase } from 'react-native';

export default class ChitPhoto extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: -1,
            isLoading: true,
            data: [],
        }
    }

    storeId = (id) => {
        const url = 'http://10.0.2.2:3333/api/v0.0.5/chits/' + id + '/photo'
        AsyncStorage.setItem('ID', url)
    }

    getId = () => {
        const id = this.state.id;
        const { navigate } = this.props.navigation;
        this.storeId(id);
        navigate("ChitPhotoResults")
    }

    render() {
        return (
            <View>
                <Text style={{ color: 'tomato', textAlign: 'center', fontSize: 25 }}> Chit Photo </Text>
                <TextInput placeholder="Enter Chit ID" onChangeText={(id) => this.setState({ id: id })} underlineColorAndroid="transparent"></TextInput>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Button title="View Photo" color="tomato" onPress={this.getId}></Button>
            </View>
        )
    }
}