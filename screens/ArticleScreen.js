import React from 'react';
import {StyleSheet, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {WebView} from 'react-native-webview';
import {connect} from 'react-redux';
import {addClip, deleteClip} from '../store/actions/user';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const ArticleScreen = props => {
  const {route, addClip, deleteClip} = props;
  const {article} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          addClip({clip: article});
        }}>
        <Text style={{margin: 10, fontSize: 30}}>Fav</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          deleteClip({clip: article});
        }}>
        <Text style={{margin: 10, fontSize: 30}}>Del</Text>
      </TouchableOpacity>
      <WebView source={{uri: article.url}} />
    </SafeAreaView>
  );
};

const mapStateProps = state => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {addClip, deleteClip};
export default connect(mapStateProps, mapDispatchToProps)(ArticleScreen);
