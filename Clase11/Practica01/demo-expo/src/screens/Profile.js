import React, { Component } from 'react';
import { View, Text, Pressable, StyleSheet} from 'react-native';


class Profile extends Component {
    render(){
        return(
            <View style= {styles.container}>
                <Text style = {styles.title}>Perfil</Text>
                <Pressable style = {styles.clickeable} onPress={ ()=> this.props.navigation.navigate('Login')}>
                    <Text style = {styles.textoClickeable}>Desloguearse</Text>
                </Pressable>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    clickeable: {
        backgroundColor: 'orange',
        borderRadius: 5,
        padding: 7,
    },
    textoClickeable: {
        textAlign: 'center'
    }
})

export default Profile;