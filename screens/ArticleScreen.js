import React from 'react';
import {StyleSheet, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {WebView} from 'react-native-webview';
import {useDispatch, useSelector} from 'react-redux';
import {addClip, deleteClip} from '../store/actions/user';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default ArticleScreen = props => {
  const {route} = props;
  const {article} = route.params;

  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          dispatch(addClip({clip: article}));
        }}>
        <Text style={{margin: 10, fontSize: 30}}>Fav</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          dispatch(deleteClip({clip: article}));
        }}>
        <Text style={{margin: 10, fontSize: 30}}>Del</Text>
      </TouchableOpacity>
      <WebView source={{uri: article.url}} />
    </SafeAreaView>
  );
};
