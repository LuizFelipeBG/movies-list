import React from 'react';
import { Dimensions, StyleSheet, StatusBar } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth,
    paddingLeft: windowWidth / 20
  },
  inputView:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  input:{
    flexDirection: 'column',
  },
  TextInput: {
    backgroundColor: "#3b3b3b",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 7,
    color:"#cbcb1a",
    borderColor: "#cbcb1a",
    textShadowColor: "#cbcb1a",
    marginTop: 3,
    width: windowWidth /2.5
  },
  TextYearInput: {
    backgroundColor: "#3b3b3b",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 7,
    color:"#cbcb1a",
    borderColor: "#cbcb1a",
    textShadowColor: "#cbcb1a",
    marginTop: 3,
    width: windowWidth /3
  },
  buttonContainer:{
    justifyContent: 'center',
  },
  button: {
    justifyContent: 'center',
    backgroundColor: "#cbcb1a",
    alignItems:'center',
    height: windowHeight / 15,
    width: windowWidth / 8,
    borderRadius: 10,
  },
  titleView:{},
  buttonText: {
    fontSize: windowHeight / 55,
    fontWeight: 'bold'
  },
});

export default styles