import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  centeredView: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: "#1e1e1e",
      alignItems: "center",
      width: windowWidth,
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },
    tinyLogo: {
      width: windowWidth / 1.5,
      height: windowHeight / 2.5,
      alignSelf: 'center',
      marginTop: windowHeight / 45,
      marginBottom: windowHeight / 20
    },
    infoContainer: {
      height: '100%',
      justifyContent: 'space-between',
      backgroundColor: "#1e1e1e",
    },
    infoItem: {
      color: "#cbcb1a",
      margin:windowWidth / 50,
    },
    buttonOk: {
      width: windowWidth / 1.5
    }
  });
  
  export default styles