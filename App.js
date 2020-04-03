import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import store from './store/Store.js';
import {Provider} from 'react-redux';
import Navigation from './src/navigation';
import ContainerForReducerucer from './src/globalComponents/ContainerForReducer.js'

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <ContainerForReducerucer/>
        <Navigation/>
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
