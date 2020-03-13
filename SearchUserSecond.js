import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TextInput, Alert, ToastAndroid, ActivityIndicator, AsyncStorage, FlatList, TouchableWithoutFeedbackBase } from 'react-native';

export default class SearchUserSecond extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: [],
        }
    }

    getSearch = async () => {
        try {
            const search = await AsyncStorage.getItem('Search')
            if (search !== null) {
                return (search)
            }
        } catch (error) {
            console.log(error)
        }
    };

    SearchUser = async () => {
        var search = await this.getSearch();
        console.log("Search is :" + search)
        const url = 'http://10.0.2.2:3333/api/v0.0.5/search_user?q=' + search;
        return await fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false, data: responseJson,
                });
                console.log(this.state.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    componentDidMount = () => {
        this.SearchUser();
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
                <Text style={{ color: '#4094f0', textAlign: 'center', fontSize: 25 }}>Result </Text>
                <Text></Text>
                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) =>
                        (
                            <View>
                                <Text></Text>
                                <Text style={{ textAlign: 'center', fontSize: 15 }}>{item.user_id}</Text>
                                <Text></Text>
                                <Text></Text>
                                <Text style={{ textAlign: 'center', fontSize: 15 }}>{item.given_name}</Text>
                                <Text></Text>
                                <Text></Text>
                                <Text style={{ textAlign: 'center', fontSize: 15 }}>{item.family_name}</Text>
                                <Text></Text>
                                <Text></Text>
                                <Text style={{ textAlign: 'center', fontSize: 15 }}>{item.email}</Text>
                                <Text></Text>
                            </View>
                        )
                    }
                    keyExtractor={({ id }, index) => id}
                />
            </View>
        );
    }
}