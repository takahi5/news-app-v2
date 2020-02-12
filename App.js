import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    height: 100,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    flexDirection: 'row',
  },
  leftContainer: {
    backgroundColor: 'red',
    width: 100,
  },
  rightContainer: {
    backgroundColor: 'blue',
    flex: 1,
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={styles.leftContainer}>
          <Image
            style={{width: 100, height: 100}}
            source={{uri: 'https://picsum.photos/200/300'}}
          />
        </View>
        <View style={styles.rightContainer}></View>
      </View>
    </View>
  );
}
