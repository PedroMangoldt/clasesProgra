import React, { Component } from 'react';
import { View, Text, Pressable, StyleSheet} from 'react-native';
import { TextInput } from 'react-native';
import { db, auth } from '../firebase/config';

class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            userName: '',
            registered: false,
            error: ''
        }
    }
    onSubmit(email , pass, userName) {
        auth.createUserWithEmailAndPassword(email , pass)
        .then(response => {
            this.setState({registered: true})
            db.collection('users').add({
                email: this.state.email,
                userName: this.state.userName,
                createdAt: Date.now()
            })
            this.props.navigation.navigate("Login");
        })
        .catch( error => {
            this.setState({error: 'Fallo en el registro.'})
            console.log('error')
          })
      
        console.log(this.state.email, this.state.password, this.state.userName)
    }
    render(){
        return(
            <View>
                <Text style = {styles.title}>Formulario de Registro</Text>
                <TextInput style={styles.field} keyboardType='email-address' placeholder='Email' onChangeText={ text => this.setState({email:text}) } value={this.state.email} />
                <TextInput style={styles.field} keyboardType='default' placeholder='User Name' onChangeText={ text => this.setState({userName:text}) } value={this.state.userName}/> 
                <TextInput style={styles.field} keyboardType='default' placeholder='Password' secureTextEntry={true}  onChangeText={ text => this.setState({password:text}) } value={this.state.password}/> 
                <Pressable style={styles.button} onPress={() => this.onSubmit(this.state.email , this.state.password, this.state.userName)}>
                    <Text>  Registrarse </Text> 
                </Pressable> 
                <Pressable style = {styles.clickeable} onPress={ ()=> this.props.navigation.navigate('Login')}>
                    <Text style = {styles.textoClickeable}>Ir a login</Text>
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
        backgroundColor: 'lightblue',
        borderRadius: 5,
        padding: 7,
    },
    textoClickeable: {
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

export default Register;