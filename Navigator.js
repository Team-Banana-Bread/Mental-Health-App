import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { EntryScreen } from './src/components/PersonalJournal/EntryScreen';
import { PersonalJournal } from './src/components/PersonalJournal/PersonalJournal';

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator headerMode='none'>
    <Screen name='PersonalJournal' component={PersonalJournal}/>
    <Screen name='Entry' component={EntryScreen}/>
  </Navigator>
);

export const AppNavigator = () => (
    <NavigationContainer>
        <HomeNavigator/>
    </NavigationContainer>
);