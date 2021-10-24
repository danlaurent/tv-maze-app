import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
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
