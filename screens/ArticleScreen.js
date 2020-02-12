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

  const user = useSelector(state => state.user);

  const dispatch = useDispatch();

  const isClipped = () => {
    return user.clips.some(clip => clip.url === article.url);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{margin: 10, fontSize: 30}}>
        {isClipped() ? 'true' : 'false'}
      </Text>
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
