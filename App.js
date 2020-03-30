import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TestView from './src/components/TestView.js';
import Main from './src/components/Main.js';
import store from './store/store.js';
import {Provider} from 'react-redux';
import Navigator from './src/navigation';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Navigator/>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
