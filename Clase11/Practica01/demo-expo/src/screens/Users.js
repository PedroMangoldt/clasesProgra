import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet} from 'react-native';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            loading: false
        }
    }

    componentDidMount() {
        db.collection('users').onSnapshot(
            docs => {
                let usuarios = [];
                docs.forEach(doc => {
                    usuarios.push({
                        id: doc.id,
                        data: doc.data()
                    })
                this.setState({
                    users: usuarios,
                    loading: false
                })
                });
            }
        )
    }

    render(){
        return(
            <View>
                <Text>Usuarios</Text>
                <FlatList data={this.state.users} keyExtractor={ item => item.id} renderItem={({item}) => <Text>{this.state.email}</Text>}/>
            </View>
        )
    }
}

export default Users;