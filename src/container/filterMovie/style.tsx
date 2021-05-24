import React from 'react';
import { Dimensions, StyleSheet, StatusBar } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: windowHeight/6,
    width: windowWidth,
  },
  inputView:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  input:{
    flexDirection: 'column',
  },
  TextInput: {
    borderWidth: 0.6,
    borderRadius: 4,
    borderColor: "#20232a",
  }
});

export default styles