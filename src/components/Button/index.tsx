import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { LIGHT_GRAY } from '../../constants/styles/colors';
import { IButton } from './interface';

const styles = StyleSheet.create({
  button: {
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 14,
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    color: LIGHT_GRAY,
  },
});

const Button = ({ text, onPress, testID }: IButton) => (
  <TouchableOpacity testID={testID} style={styles.button} onPress={onPress}>
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);

export default Button;
