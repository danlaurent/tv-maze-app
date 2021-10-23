import React from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';
import { IPoster } from './interface';

const styles = StyleSheet.create({
  small: {
    width: 105,
    height: 147,
    borderRadius: 4,
  },
  large: {
    width: 210,
    height: 295,
    borderRadius: 4,
  },
  posterPlaceholder: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#CECECE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  posterPlaceholderText: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
  },
});

const Poster = ({ source, size = 'small', style }: IPoster) => (
  <View style={StyleSheet.flatten([styles[size], style])}>
    {source ? (
      <Image source={{ uri: source }} style={styles[size]} />
    ) : (
      <View style={styles.posterPlaceholder}>
        <Text style={styles.posterPlaceholderText}>N/A</Text>
      </View>
    )}
  </View>
);

export default Poster;
