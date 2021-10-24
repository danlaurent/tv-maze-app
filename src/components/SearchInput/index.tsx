import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { ISearchInput } from './interface';
import {
  DARK_QUANTUM_BLUE,
  GRAY,
  LIGHT_GRAY,
  QUANTUM_BLUE,
} from '../../constants/styles/colors';

const styles = StyleSheet.create({
  inputContainer: {
    height: 60,
    borderWidth: 1,
    padding: 12,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: QUANTUM_BLUE,
    borderColor: DARK_QUANTUM_BLUE,
  },
  input: {
    marginLeft: 12,
    color: 'white',
  },
});

const SearchInput = ({
  value,
  onChangeText,
  placeholder,
  testID,
}: ISearchInput) => (
  <View testID={testID} style={styles.inputContainer}>
    <FontAwesome5 name='search' size={24} color={LIGHT_GRAY} />
    <TextInput
      testID={`${testID}_textInput`}
      style={styles.input}
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
      placeholderTextColor={GRAY}
    />
  </View>
);

export default SearchInput;
