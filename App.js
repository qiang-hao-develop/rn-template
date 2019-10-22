import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStore, applyMiddleware} from 'redux';
import {Provider, connect} from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import {SafeAreaView} from 'react-navigation';

import reducer from './app/reducers';
import Stack from './app/navigators/StackNavigator';

const client = axios.create({
  baseURL: 'https://api.github.com',
  responseType: 'json',
});

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Stack />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
