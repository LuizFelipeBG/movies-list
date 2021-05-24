import React from 'react';
import { Dimensions, StyleSheet, StatusBar } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 8,
    width: windowWidth,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 15,
    width: windowWidth / 2
  },

  // item css
  tinyLogo: {
    width: windowWidth / 6,
    height: windowHeight / 10,
  },
  
  itemListContainer: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    borderRadius: 20,
    marginVertical: 8,
    flexDirection: 'row'
  },
  imageView:{
    marginRight: windowWidth / 25
  },
});

export default styles