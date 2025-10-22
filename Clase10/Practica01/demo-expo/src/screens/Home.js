import React, { Component } from 'react';
import { View, Text, Pressable, StyleSheet} from 'react-native';
import DynamicForm from '../components/DynamicForm';

class Home extends Component {
    constructor(){
        super();
        this.state = {
        }
    }
    render(){
        return(
            <View>
                <Text style={styles.title}>Pagina Principal</Text>
                <DynamicForm/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    }
})

export default Home;