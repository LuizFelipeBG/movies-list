import React, { useState } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import style from './styles'

const Pagination = ({search}: any) => {
    const [actualPage, setActualPage] =useState(1)
   const lastPage = () => {
        if(actualPage === 1) return
        setActualPage(actualPage - 1)
        search(actualPage - 1)
   }

   const nextPage = () => {
        setActualPage(actualPage + 1)
        search(actualPage + 1)
    }

    return (
        <View style={style.paginationContainer}>
            <TouchableOpacity onPress={() => lastPage()} style={style.buttonPagination}>
                <AntDesign name="doubleleft"  size={30} color="black" />
            </TouchableOpacity>
            <Text style={style.pageNumber}>{actualPage}</Text>
            <TouchableOpacity onPress={() => nextPage()} style={style.buttonPagination}>
                <AntDesign name="doubleright" onPress={() => lastPage()} size={30} color="black" />
            </TouchableOpacity>
        </View>
        )}

export default Pagination

