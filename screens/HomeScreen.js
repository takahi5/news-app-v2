import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, FlatList, SafeAreaView} from 'react-native';
import Constants from 'expo-constants';
import axios from 'axios';
import ListItem from '../components/ListItem';
import Loading from '../components/Loading';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const URL = `https://newsapi.org/v2/top-headlines?country=jp&category=business&apiKey=${Constants.manifest.extra.newsApiKey}`;

export default HomeScreen = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const pageRef = useRef(1);
  const fetchedAllRef = useRef(false);

  useEffect(() => {
    fetchArticles(1);
  }, []);

  const fetchArticles = async (page) => {
    setLoading(true);
    try {
      const response = await axios.get(`${URL}&page=${page}`);
      if (response.data.articles.length > 0) {
        const newArticles = [...articles, ...response.data.articles];
        setArticles(newArticles);
      } else {
        fetchedAllRef.current = true;
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const onEndReached = () => {
    if (!fetchedAllRef.current) {
      pageRef.current = pageRef.current + 1;
      fetchArticles(pageRef.current);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading && <Loading />}
      <FlatList
        data={articles}
        renderItem={({item}) => (
          <ListItem
            imageUrl={item.urlToImage}
            title={item.title}
            author={item.author}
            onPress={() =>
              props.navigation.navigate('Article', {article: item})
            }
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={onEndReached}
      />
    </SafeAreaView>
  );
};
