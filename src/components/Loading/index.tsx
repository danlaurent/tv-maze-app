import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginBottom: 32,
  },
});

const Loading = () => (
  <View style={styles.container}>
    <ActivityIndicator size='large' color='white' />
  </View>
);

export default Loading;
