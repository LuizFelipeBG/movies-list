import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 8,
    width: windowWidth,
    marginHorizontal: 16,
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 15,
    width: windowWidth / 2,
    color:'#1e1e1e',
    fontWeight: 'bold'
  },

  // item css
  tinyLogo: {
    width: windowWidth / 6,
    height: windowHeight / 10,
  },
  
  itemListContainer: {
    backgroundColor: "#cbcb1a",
    padding: 20,
    borderRadius: 20,
    alignItems:'center',
    justifyContent: 'space-around',
    marginVertical: 8,
    flexDirection: 'row'
  },
  imageView:{
    marginRight: windowWidth / 25
  },

    // pagination ------------

  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: windowWidth,
    }
});

export default styles