import React, { Component } from 'react';
import { View, Text, Pressable, StyleSheet} from 'react-native';
import { TextInput } from 'react-native';
import { auth } from '../firebase/config';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            loggedIn: false,
            error: ''
        }
    }
    onSubmit(email , pass) {
        if (!email.includes('@')) {
            this.setState({error: 'Email mal formateado'})
        } else if (pass.length < 6){
            this.setState({error: 'La password debe tener una longitud mínima de 6 caracteres'})
        } else {
        auth.signInWithEmailAndPassword(email, pass)
    .then((response) => {
        this.setState({loggedIn: true});
        this.props.navigation.navigate('HomeMenu')
    })
    .catch(error => {
      this.setState({error: 'Credenciales inválidas.'})
      console.log(error)
    })
        console.log(this.state.email, this.state.password)
    }
}

    render(){
        return(
            <View style={styles.container}>
                <Text style = {styles.title}>Formulario de Login</Text>
                <TextInput style={styles.field} keyboardType='email-address' placeholder='email' onChangeText={ text => this.setState({email:text}) } value={this.state.email} />
                <TextInput style={styles.field} keyboardType='default' placeholder='password' secureTextEntry={true} onChangeText={ text => this.setState({password:text}) } value={this.state.password}/>
                    <Text>{this.state.error}</Text>
                <Pressable style={styles.button} onPress={() => this.onSubmit(this.state.email, this.state.password)}>
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
        paddingHorizontal: 10,
        marginTop: 20
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 6
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
        height: 20,
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderStyle: 'solid',
        borderRadius: 6,
        marginVertical: 10
    },
    button: {
        backgroundColor: '#28a745',
        paddingHorizontal: 10,
        paddingVertical: 6,
        alignItems: 'center',
        borderRadius: 4,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#28a745'
    }
})

export default Login;