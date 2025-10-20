import React, { Component } from 'react';
import { View, Text, Pressable, StyleSheet} from 'react-native';
import { TextInput } from 'react-native';

class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }
    onSumbit() {
        console.log(this.state.email, this.state.password)
    }
    render(){
        return(
            <View>
                <Text style = {styles.title}>Formulario de Registro</Text>
                <TextInput style={styles.field} keyboardType='email-address' placeholder='email' onChangeText={ text => this.setState({email:text}) } value={this.state.email} />
                <TextInput style={styles.field} keyboardType='default' placeholder='password' secureTextEntry={true}  onChangeText={ text => this.setState({password:text}) } value={this.state.password}/> 
                <Pressable onPress={() => this.onSubmit()}>
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

    }
})

export default Register;