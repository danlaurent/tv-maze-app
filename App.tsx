import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/navigation/TabNavigator';
import ShowNavigator from './src/navigation/ShowNavigator';

export default function App() {
  return (
    <>
      <NavigationContainer>
        <ShowNavigator />
      </NavigationContainer>
      <StatusBar style='auto' />
    </>
  );
}
