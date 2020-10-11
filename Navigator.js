import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './src/components/HomePage/HomePage';
import { LoginScreen } from './src/components/LoginPage/LoginPage';
import { SpotifyScreen } from './src/components/SpotifyLoginPage/SpotifyLoginPage';

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator headerMode='none'>
    <Screen name='Home' component={HomeScreen}/>
    <Screen name='Login' component={LoginScreen}/>
    <Screen name='Spotify' component={SpotifyScreen}/>
  </Navigator>
);

export const AppNavigator = () => (
    <NavigationContainer>
        <HomeNavigator/>
    </NavigationContainer>
);