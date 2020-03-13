import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TextInput, Alert, ToastAndroid, ActivityIndicator, AsyncStorage } from 'react-native';

export default class SearchUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: '',
            returnUserID: '',
            returnGivenName: '',
            returnFamilyName: '',
            returnEmail: '',
        }
    }
    storeSearch = (search) => {
        AsyncStorage.setItem('Search', search)
    }

    Search = () => {
        const search = this.state.search;
        const { navigate } = this.props.navigation;
        this.storeSearch(search);
        navigate("SearchResults")
    }

    render() {
        return (
            <View>
                <Text style={{ color: '#4094f0', textAlign: 'center', fontSize: 25 }}>Search</Text>
                <Text></Text>
                <Text> </Text>
                <TextInput placeholder="Enter Search" onChangeText={(search) => this.setState({ search: search })} underlineColorAndroid="transparent"></TextInput>
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
                <Button title="Search" onPress={this.Search}></Button>
            </View>
        )
    }
}

