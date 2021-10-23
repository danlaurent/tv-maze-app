import React from 'react';
import { StyleSheet, View, TouchableOpacity, StatusBar } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { IHeader } from './interface';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
  },
  content: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  statusBar: {
    height: StatusBar.currentHeight,
    alignSelf: 'stretch',
  },
});

const Header = ({ onBackPress }: IHeader) => (
  <View style={styles.container}>
    <View style={styles.statusBar} />
    <View style={styles.content}>
      <TouchableOpacity onPress={onBackPress}>
        <FontAwesome5 name='chevron-left' size={24} color='white' />
      </TouchableOpacity>
    </View>
  </View>
);

export default Header;
