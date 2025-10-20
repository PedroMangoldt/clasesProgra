import React, { Component } from 'react';
import { View, Text, Pressable, StyleSheet} from 'react-native';
import { TextInput } from 'react-native';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            userName: '',
        }
    }
    onSumbit() {
        console.log(this.state.email, this.state.password, this.state.userName )
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style = {styles.title}>Formulario de Login</Text>
                <TextInput style={styles.field} keyboardType='email-address' placeholder='email' onChangeText={ text => this.setState({email:text}) } value={this.state.email} />
                <TextInput style={styles.field} keyboardType='default' placeholder='password' secureTextEntry={true} onChangeText={ text => this.setState({password:text}) } value={this.state.password}/>
                <Pressable onPress={() => this.onSubmit()}>
                    <Text> Login </Text> 
                </Pressable> 
                <Pressable style = {styles.clickeableUno} onPress={ ()=> this.props.navigation.navigate('Register')}>
                    <Text style = {styles.textoClickeableUno} >Ir al registro</Text>
                </Pressable>
                <Pressable  style = {styles.clickeableDos} onPress={ ()=> this.props.navigation.navigate('HomeMenu')}>
                    <Text style = {styles.textoClickeableDos}>Ir a la aplicacion</Text>
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
    clickeableUno: {
        backgroundColor: 'lightblue',
        borderRadius: 5,
        padding: 7,
    },
    textoClickeableUno: {
        textAlign: 'center'
    },
    clickeableDos: {
        backgroundColor: 'orange',
        borderRadius: 5,
        padding: 7,
    },
    textoClickeableDos: {
        textAlign: 'center'
    },
    field:{

    }
})

export default Login;