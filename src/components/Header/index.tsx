import React from 'react';
import { StyleSheet, View, TouchableOpacity, StatusBar } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { IHeader } from './interface';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 12,
  },
});

const Header = ({ onBackPress }: IHeader) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onBackPress}>
      <FontAwesome5 name='chevron-left' size={24} color='black' />
    </TouchableOpacity>
  </View>
);

export default Header;
