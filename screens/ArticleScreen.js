import React from 'react';
import {StyleSheet, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {WebView} from 'react-native-webview';
import {useDispatch, useSelector} from 'react-redux';
import {addClip, deleteClip} from '../store/actions/user';
import ClipButton from '../components/ClipButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default ArticleScreen = (props) => {
  const {route} = props;
  const {article} = route.params;

  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const isClipped = () => {
    return user.clips.some((clip) => clip.url === article.url);
  };

  const toggleClip = () => {
    if (isClipped()) {
      dispatch(deleteClip({clip: article}));
    } else {
      dispatch(addClip({clip: article}));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ClipButton onPress={toggleClip} enabled={isClipped()} />
      <WebView source={{uri: article.url}} />
    </SafeAreaView>
  );
};
