import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeNavigator } from './HomeNavigation';
import { TabNavigator } from './AppNavigation';

const Stack = createStackNavigator();

export const AppNavigator = () => (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' options={{headerShown: false}} component={HomeNavigator}/>
        <Stack.Screen name='App' options={{headerShown: false}} component={TabNavigator}/>
      </Stack.Navigator>
    </NavigationContainer>
);