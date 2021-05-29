import React, {useState} from 'react';
import { TextInput, View, Alert, Text, TouchableOpacity, Keyboard } from 'react-native';
import style from './style'
import {formatInputsValue, verifyYear} from './functions'
import styles from './style';


const FilterMovies = ({search}: any) => {

    const [name, setInputName] = useState("")
    const [year, setInputYear] = useState("")

    const sendValuesFilter = () => {
        Keyboard.dismiss()
        const verify = verifyYear(year)
        if(year !== ""){
            if(!verify) return (
                Alert.alert(
                    "Error",
                    `O ano digitalizado para a busca não é valido, Por favor tente um ano de 1990 a ${new Date().getFullYear()}`,
                    [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                    },
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                )
            )
        }

        const nameSpace = name.trim()
        search(nameSpace, year)
    }

    return (
    <View style={style.container}>
        <View style={style.inputView}>
            <View style={style.input}>
                <Text style={{
                    color: "#cbcb1a",
                    fontWeight: 'bold',
                }}>
                    Nome: 
                </Text>
                <TextInput
                    style={style.TextInput}
                    placeholderTextColor="#cbcb1a"
                    placeholder='Filtrar filme por nome '
                    onChangeText={setInputName}
                    selectionColor="#cbcb1a"
                    value={name}
                    testID='InputFilterName'
                    onBlur={sendValuesFilter}
                />
            </View>
            <View style={style.input}>
            <Text style={{
                    color: "#cbcb1a",
                    fontWeight: 'bold',
                }}>
                    Ano: </Text>
                <TextInput
                    style={style.TextYearInput}
                    placeholderTextColor="#cbcb1a"
                    placeholder='Filtrar por ano'
                    onChangeText={setInputYear}
                    selectionColor="#cbcb1a"
                    value={year}
                    onBlur={() => Keyboard.dismiss()}
                    maxLength={4}
                    keyboardType="numeric"
                    testID='InputFilterYear'
                />    
            </View>
            <View style={style.buttonContainer}>
                <TouchableOpacity
                    onPress={sendValuesFilter}
                    style={style.button}
                >
                    <Text style={style.buttonText}>Filtrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>)
}

export default FilterMovies