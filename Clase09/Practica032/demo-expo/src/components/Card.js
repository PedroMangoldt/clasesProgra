import React, { Component } from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';

export default function Card(props){
    return(
        <View style={styles.card}>
            <Image style={styles.image} source={{uri: props.image}} resizeMode='contain'/>
            <View style={styles.info}>
                <Text>Nombre: {props.title}</Text>
                <Text>Precio: {props.price}</Text>
                <Text>Descripcion: {props.description}</Text>
                <Text>Categoria: {props.category}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        gap: 5,
        padding: 12,
        borderWidth: 1,
        borderColor: '#e9e9e9',
    },
    image: {
        height: 100,
        width: 100
    },
    info:{
        flex: 1,
        gap: 4,
        alignItems: 'center',
    }
})
