import React, { Component } from 'react';
import { View, Text, Pressable, StyleSheet, FlatList} from 'react-native';
import Card from '../components/Card';

class ProductsAll extends Component {
    constructor(){
        super();
        this.state = {
            products: []    
        }
    }

    componentDidMount() {
      fetch('https://rickandmortyapi.com/api/character')
      .then(res => res.json())
      .then(data => {this.setState({products: data.results})})
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.titulo}>Productos</Text>
                <FlatList data={this.state.products} keyExtractor={item => item.id.toString()} renderItem={({item}) => <Card name={item.name} species={item.species} gender={item.gender} image={item.image}/>}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    titulo: {
        alignItems: 'center',
        fontSize: 24,
        fontWeight: 'bold',
    }
})

export default ProductsAll