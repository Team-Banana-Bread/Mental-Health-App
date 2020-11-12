import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './src/components/HomePage/HomePage';
import { LoginScreen } from './src/components/LoginPage/LoginPage';
import { SignUp } from './src/components/LoginPage/SignUp';


const { Navigator, Screen } = createStackNavigator();

export const HomeNavigator = () => (
  <Navigator headerMode='none'>
    <Screen name='Home' component={HomeScreen}/>
    <Screen name='Login' component={LoginScreen}/>
    <Screen name='SignUp' component={SignUp}/>
  </Navigator>
);