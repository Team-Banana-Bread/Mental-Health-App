import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { BottomNavigation, BottomNavigationTab, Layout, Text } from '@ui-kitten/components';
import { createStackNavigator } from '@react-navigation/stack';

import PersonalJournal from './src/components/PersonalJournal/PersonalJournal';

const { Navigator, Screen } = createStackNavigator();

const JournalScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text category='h1'>JOURNAL</Text>
  </Layout>
);

const GoodNewsScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text category='h1'>GOOD NEWS</Text>
  </Layout>
);

const HomeNavigator = () => (
  <Navigator headerMode='none'>
    <Screen name='PersonalJournal' component={PersonalJournal}/>
  </Navigator>
);


export const AppNavigator = () => (
    <NavigationContainer>
        <HomeNavigator/>
    </NavigationContainer>
);