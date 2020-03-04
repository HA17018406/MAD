
import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, View, Button, TextInput, Alert } from 'react-native';

class PostChit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chit_id: 0,
            timestamp: 0,
            chit_content: "string"
        }
    }

    addItem() {

        let myObj = {
            chit_id: parseInt(this.state.chit_id),
            timestamp: this.state.timestamp,
            chit_content: this.state.chit_content
        }

        console.log(myObj);

        return fetch("http://10.0.2.2:3333/api/v0.0.5/chits'",
            {
                method: 'POST',
                body: myObj
            })
            .then((response) => {
                Alert.alert("Chit Posted!");
            })
            .catch((error) => {
                console.error(error);
            });
    }
    render() {


        return (
            <View>
                <Text style={{ color: '#4094f0', textAlign: 'center', fontSize: 25 }}>Post a CHIT</Text>
                <Text></Text>
                <TextInput placeholder="ID:" onChangeText={(text) => this.setState({ "id": text })} value={this.state.id} />
                <TextInput placeholder="Time" onChangeText={(text) => this.setState({ "timestamp": text })} value={this.state.timestamp} />
                <TextInput placeholder="CHIT" onChangeText={(text) => this.setState({ "chit_content": text })} value={this.state.chit_content} />

                <Button title="Add" onPress={() => this.addItem()} />

            </View>
        )
    }
}

export default PostChit