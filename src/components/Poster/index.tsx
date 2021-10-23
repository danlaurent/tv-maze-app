import React from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import {
  DARK_QUANTUM_BLUE,
  GRAY,
  POSTER_PLACEHOLDER_COLOR,
} from '../../constants/styles/colors';
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
    backgroundColor: POSTER_PLACEHOLDER_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  posterPlaceholderText: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    color: GRAY,
  },
});

const Poster = ({ source, size = 'small', style }: IPoster) => (
  <View style={StyleSheet.flatten([styles[size], style])}>
    {source ? (
      <Image source={{ uri: source }} style={styles[size]} />
    ) : (
      <View style={styles.posterPlaceholder}>
        <MaterialIcons
          name='image-not-supported'
          size={60}
          color={DARK_QUANTUM_BLUE}
        />
      </View>
    )}
  </View>
);

export default Poster;
