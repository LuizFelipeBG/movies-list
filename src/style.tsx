import React from 'react';
import { Dimensions, StyleSheet ,StatusBar} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: windowHeight,
    marginTop: StatusBar.currentHeight,
    width: windowWidth,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles