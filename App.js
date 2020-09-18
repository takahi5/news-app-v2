import React from 'react';
import {StyleSheet, View} from 'react-native';
import ListItem from './components/ListItem';
import articles from './dummies/articles';

export default function App() {
  const items = articles.map((article, index) => {
    return (
      <ListItem
        imageUrl={article.urlToImage}
        title={article.title}
        author={article.author}
        key={index.toString()}
      />
    );
  });

  return <View style={styles.container}>{items}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
