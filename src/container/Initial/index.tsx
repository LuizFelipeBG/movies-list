import React from 'react';
import {Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import style  from './styles'

const InitialScreen = () => {
    return (
        <View style={style.main}>
           <AntDesign name="smileo" size={100} color="#cbcb1a" />
            <Text style={style.initialText}>Estou feliz em poder te ajudar nessa! Pesquise um nome para buscar filmes!!</Text>
        </View>
    )
}

export default InitialScreen