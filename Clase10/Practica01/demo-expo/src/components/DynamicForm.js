import React, { Component } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

class DynamicForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      comment: ''
    }
  }

  onSubmit(){
    console.log(this.state.comment)
  }

  render(){
    return(
        <View>
            <Text style={styles.titulo}>Comentario</Text>
            <TextInput style={styles.field} placeholder='Escribi tu comentario' onChangeText={(text)=> this.setState({ comment: text })} value={this.state.comment}/>

            <Pressable style={styles.button} onPress={() => this.onSubmit()}>
                <Text style={styles.buttonText}>Enviar</Text>
            </Pressable>
            <View>
                <Text>Preview:</Text>
                <Text>{this.state.comment}</Text>
            </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    titulo: {
        fontWeight: 'bold',
        paddingTop: 10,
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

export default DynamicForm;