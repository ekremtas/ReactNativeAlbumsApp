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
import ListAlbums from './components/ListAlbums';

//: () => React$Node
const App = () => {

  return (
    <View style={{ flex: 1 }} >
      <Header headerText="THE BEST ALBUMS" />
      <ListAlbums />
    </View>
  );
}



export default App;
