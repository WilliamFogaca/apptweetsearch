/* eslint-disable no-use-before-define */
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
} from 'react-native';

const Loading = () => (
  <View style={styles.container}>
    <ActivityIndicator size={60} color="#1DA1F2" />
    <Text style={styles.loadingText}>Carregando...</Text>
  </View>
);

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: '#1DA1F2',
    fontSize: 22,
    fontWeight: '600',
  },
});
