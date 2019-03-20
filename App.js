import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from "react-native-webview";

export default class App extends Component {
render() {
  return (
    <View style={styles.Container}>
      <WebView
        style={ styles.WebViewStyle }
        source={{ uri: 'https://www.youtube.com/embed/mXRfApkMYZU' }}
        javaScriptEnabled={true}
        domStorageEnabled={true}   
      />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1
  },
  WebViewStyle: {
    margin: 20
  }
});