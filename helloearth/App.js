/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import { HelloWorld } from './components/HelloWorld';
import { GoToUdemy } from './components/GoToUdemy';
import { StateHello } from './components/StateHello';
import { StylesHello } from './components/StylesHello';
import { FlexHello } from './components/FlexHello';
import { ListHello } from './components/ListHello';
import { FlatListHello } from './components/FlatListHello';
import { SectionListHello } from './components/SectionListHello';
import { TextInputHello } from './components/TextInputHello';
import { ButtonHello } from './components/ButtonHello';
import { AlertHello } from './components/AlertHello';
import { ModalHello } from './components/ModalHello';
import { ImageHello } from './components/ImageHello';





const App = () => {

  return (
    // <View style={styles.container}>
    //   <StylesHello />
    // </View>
    //<FlexHello />
    <ImageHello />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D17FD6',
  },
});

export default App;
