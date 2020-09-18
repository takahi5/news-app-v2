import React from 'react';
import {StyleSheet, View} from 'react-native';
import ListItem from './components/ListItem';

export default function App() {
  return (
    <View style={styles.container}>
      <ListItem />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
