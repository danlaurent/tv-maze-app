import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screens/Home';
import ShowDetailsScreen from '../../screens/ShowDetails';
import EpisodeDetailsScreen from '../../screens/EpisodeDetails';
import { APP_BACKGROUND_COLOR } from '../../constants/styles/colors';

const Stack = createStackNavigator();

const ShowNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: APP_BACKGROUND_COLOR },
      }}
    >
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
      <Stack.Screen name='ShowDetailsScreen' component={ShowDetailsScreen} />
      <Stack.Screen
        name='EpisodeDetailsScreen'
        component={EpisodeDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default ShowNavigator;
