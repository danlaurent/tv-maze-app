import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import HomeScreen from '../../screens/Home';
import { DARK_QUANTUM_BLUE, GRAY } from '../../constants/styles/colors';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: DARK_QUANTUM_BLUE,
          borderTopWidth: 0,
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name='home'
              size={24}
              color={focused ? 'white' : GRAY}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
