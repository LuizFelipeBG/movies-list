import React from 'react';
import { Dimensions, StyleSheet, StatusBar } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: windowHeight/6,
    width: windowWidth,
    justifyContent:'center',
  },
  inputView:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  input:{
    flexDirection: 'column',
  },
  TextInput: {
    borderWidth: 2,
    borderRadius: 4,
    paddingHorizontal: 7,
    color:"#cbcb1a",
    borderColor: "#cbcb1a",
    textShadowColor: "#cbcb1a",
    marginTop: 3,
    width: windowWidth /2.5
  },
  buttonContainer:{
    justifyContent: 'center'
  },
  button: {
    justifyContent: 'center',
    backgroundColor: "#cbcb1a",
    alignItems:'center',
    height: windowHeight / 20,
    width: windowWidth / 8,
    borderRadius: 10
  },
  titleView:{}
});

export default styles