import React, {useState} from 'react';
import { TextInput, View, Button, Text } from 'react-native';
import style from './style'
import {formatInputsValue} from './functions'


const FilterMovies = ({search}: any) => {

    const [name, setInputName] = useState("")
    const [year, setInputYear] = useState("")

    const sendValuesFilter = () => {
        const objToSend = formatInputsValue(name, year)
        search(name, year)
    }

    return (
    <View style={style.container}>
        <View style={style.inputView}>
            <View style={style.input}>
                <Text>Nome: </Text>
                <TextInput
                    style={style.TextInput}
                    placeholder='Filtrar filme por nome'
                    onChangeText={setInputName}
                    value={name}
                    testID='InputFilterName'
                />
            </View>
            <View style={style.input}>
                <Text>Ano: </Text>
                <TextInput
                    style={style.TextInput}
                    placeholder='Filtrar por ano'
                    onChangeText={setInputYear}
                    value={year}
                    keyboardType="numeric"
                    testID='InputFilterYear'
                />    
            </View>
            <Button
                onPress={sendValuesFilter}
                title="Filtrar"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    </View>)
}

export default FilterMovies