import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screens/Home';
import ShowDetailsScreen from '../../screens/ShowDetails';
import TabNavigator from '../TabNavigator';
import EpisodeDetailsScreen from '../../screens/EpisodeDetails';

const Stack = createStackNavigator();

const ShowNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Home' component={TabNavigator} />
      <Stack.Screen name='ShowDetailsScreen' component={ShowDetailsScreen} />
      <Stack.Screen
        name='EpisodeDetailsScreen'
        component={EpisodeDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default ShowNavigator;
