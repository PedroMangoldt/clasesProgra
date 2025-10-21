import React, { Component } from 'react';
import { View, Text, Pressable, StyleSheet} from 'react-native';
import Contador from '../components/Contador';

class Home extends Component {
    saludar(){
        console.log('me clickearon');
    }
    render() {
        return(
            <View style={styles.container}>
                <Text>Hola Mundo</Text>
                <Pressable style = {styles.clickeable} onPress={() => this.saludar()}>
                    <Text style = {styles.textoClickeable}>Clickeame</Text> 
                </Pressable> 
                <Contador/>
            </View>
        )

    }
}
const styles = StyleSheet.create({
    container: {
        textAlign: 'center',
        padding: 10,
    },
    clickeable: {
        padding: 4,
        backgroundColor: '#ccc',
        marginBottom: 10,
        borderRadius: 4,
    },
    textoClickeable: {
        alignItems: 'center',
        fontWeight: 'bold',
    }
});

export default Home;