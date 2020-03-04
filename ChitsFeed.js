import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, View, Button } from 'react-native';

class ChitsFeed extends Component {

    constructor(props) {

        super(props);
        this.state = {
            isLoading: true,
            ChitsData: []
        }
    }

    ////delete(id) {
    ////    Alert.alert(id)
    ////    return fetch('http://10.0.2.2:3333/list/' + id, {
    ////        method: 'delete'
    ////    })
    ////        .then((response) => {
    ////            this.getData();
    ////        })
    ////        .then((response) => {
    ////            Alert.alert("Item deleted")
    ////        })
    ////        .catch((error) => {
    ////            console.log(error);
    ////        });
    //                                <Text>{item.item_name}</Text>
    //<Button title="Delete" onPress={() => this.delete(id)} />
    ////}

    render() {

        if (this.state.isLoading) {
            return (<View><ActivityIndicator /></View>)
        }

        return (
            <View>
                <FlatList
                    data={this.state.ChitsData}
                    renderItem={({ item }) =>
                        (
                            <View>

                                <Text></Text>
                                <Text>{item.chit_content}</Text>
                                <Text>{item.timestamp}</Text>
                                <Text></Text>
                                

                            </View>
                        )
                    }
                    keyExtractor={({ id }, index) => id}
                />
            </View>
        );

    }

    getData() {

        return fetch('http://10.0.2.2:3333/api/v0.0.5/chits')
            .then((response) => response.json()).then((responseJson) => {
                this.setState({
                    isLoading: false, ChitsData: responseJson,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }


    componentDidMount() {
        this.getData();
    }





}

export default ChitsFeed