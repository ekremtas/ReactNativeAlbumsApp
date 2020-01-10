/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from './components/Header';
//: () => React$Node
const App = () => {

  return (
    <View >
      <Header headerText="THE BEST ALBUMS" />
    </View>
  );
};



export default App;
