import React, { Component } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

class Contador extends Component {
    constructor(){
        super();
        this.state = {
            clicks: 0,
        }
    }
    sumar(){
        this.setState((clicks) => ({clicks: clicks + 1}))
    }
    render() {
        return(
            <View style = {styles.container}>
                <Text>Cantidad de Clicks: {clicks}</Text>
                <Pressable  style = {styles.clickeable} onPress={this.sumar()}>
                    <Text style = {styles.textoClickeable}>Click aqui para contar</Text>
                </Pressable>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        marginVertical: 5,
    },
    clickeable: {
        padding: 7,
        backgroundColor: 'rgba(0, 255, 0, 0.5)',
        marginBottom: 10,
        borderRadius: 4,
    },
    textoClickeable: {
        fontWeight: 'bold',
    }
});


export default Contador;