import React from 'react';
import { Dimensions, StyleSheet, StatusBar } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: windowWidth,
    paddingBottom: 10
    },
    buttonPagination: {
        backgroundColor: "#cbcb1a",
        width: windowWidth / 2.8,
        alignItems: 'center',
        borderRadius: 5
    },
    pageNumber: {
        color: "#cbcb1a",
        fontSize: 20
    }
});

export default styles