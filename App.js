import React, {useState, useEffect} from 'react';
import {StyleSheet, FlatList, SafeAreaView} from 'react-native';
import ListItem from './components/ListItem';
import dummyArticles from './dummies/articles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setArticles(dummyArticles);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({item}) => (
          <ListItem
            imageUrl={item.urlToImage}
            title={item.title}
            author={item.author}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}
