import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  itemContainer: {
    height: 100,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    flexDirection: 'row',
  },
  leftContainer: {
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
  },
  subText: {
    fontSize: 12,
    color: 'gray',
  },
  image: {
    width: 95,
    height: 95,
  },
});

const ListItem = ({imageUrl, title, author, onPress}) => {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
      <View style={styles.leftContainer}>
        {!!imageUrl && <Image style={styles.image} source={{uri: imageUrl}} />}
      </View>
      <View style={styles.rightContainer}>
        <Text numberOfLines={3} style={styles.text}>
          {title}
        </Text>
        <Text style={styles.subText}>{author}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
