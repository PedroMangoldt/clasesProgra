import React, { Component } from 'react';
import { View, Text, Pressable, StyleSheet} from 'react-native';

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