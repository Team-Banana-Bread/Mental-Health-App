import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeNavigator } from './HomeNavigation';
import { TabNavigator } from './AppNavigation';

const Stack = createStackNavigator();

export const AppNavigator = () => (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeNavigator}/>
        <Stack.Screen name='App' component={TabNavigator}/>
      </Stack.Navigator>
    </NavigationContainer>
);