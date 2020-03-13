import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TextInput, Alert, ToastAndroid, ActivityIndicator, AsyncStorage, FlatList, TouchableWithoutFeedbackBase } from 'react-native';

export default class SingleSearchSecond extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: [],
        }
    }

    getId = async () => {
        try {
            const Id = await AsyncStorage.getItem('Single')
            if (Id !== null) {
                return (Id)
            }
        } catch (error) {
            console.log(error)
        }
    };

    SingleSearch = async () => {
        var id = await this.getId();
        id = parseInt(id)
        console.log("ID:" + id)
        const url = 'http://10.0.2.2:3333/api/v0.0.5/user/' + id + '/';
        return await fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                const searchObj = Object.keys(responseJson).map(key => ({ [key]: responseJson[key] }));
                this.setState({
                    isLoading: false, data: searchObj,
                });
                console.log(this.state.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    componentDidMount = () => {
        this.SingleSearch();
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
                <Text style={{ color: '#4094f0', textAlign: 'center', fontSize: 25 }}>Single User Result </Text>
                <Text></Text>
                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) =>
                        (
                            <View>
                                <Text style={{ textAlign: 'center', fontSize: 15 }}>{item.given_name}</Text>
                                <Text style={{ textAlign: 'center', fontSize: 15 }}>{item.family_name}</Text>
                                <Text style={{ textAlign: 'center', fontSize: 15 }}>{item.email}</Text>
                            </View>
                        )
                    }
                    keyExtractor={({ id }, index) => id}
                />
            </View>
        );
    }
}