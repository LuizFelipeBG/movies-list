import React from 'react';
import { Dimensions, StyleSheet ,StatusBar} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: windowHeight,
    width: windowWidth,
    backgroundColor: '#1e1e1e',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default styles