import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { IButton } from './interface';

const styles = StyleSheet.create({
  button: {
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 14,
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
  },
});

const Button = ({ text, onPress }: IButton) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.button}>{text}</Text>
  </TouchableOpacity>
);

export default Button;
