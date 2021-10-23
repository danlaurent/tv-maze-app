import React from 'react';
import { TextInput, StyleSheet, View, SafeAreaView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { ISearchInput } from './interface';

const styles = StyleSheet.create({
  inputContainer: {
    height: 60,
    borderWidth: 1,
    padding: 12,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    marginLeft: 12,
  },
});

const SearchInput = ({ value, onChangeText, placeholder }: ISearchInput) => (
  <View style={styles.inputContainer}>
    <FontAwesome5 name='search' size={24} color='black' />
    <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
    />
  </View>
);

export default SearchInput;
