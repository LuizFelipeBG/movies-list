import React from 'react';
import { Dimensions, StyleSheet ,StatusBar} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    main: {
        alignItems: 'center'
    }
    ,
    image:{
        width: windowWidth / 1,
        height: windowHeight / 1.15,
        resizeMode: 'stretch'
    },
    initialText:{
        color: "#cbcb1a",
        width: windowWidth / 1.3,
        fontSize: windowWidth / 18,
        paddingTop: windowHeight / 20
    }
})

export default styles