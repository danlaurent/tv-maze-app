import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from '../Button';
import SearchInput from '../SearchInput';
import { ISearchBar } from './interface';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  inputContainer: {
    flex: 1,
    marginRight: 12,
  },
});

const SearchBar = ({
  search,
  onChangeText,
  placeholder,
  buttonText,
  onButtonPress,
}: ISearchBar) => (
  <View style={styles.container}>
    <View style={styles.inputContainer}>
      <SearchInput
        value={search}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
    </View>
    <Button text={buttonText} onPress={onButtonPress} />
  </View>
);

export default SearchBar;