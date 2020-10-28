import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { BottomNavigation, BottomNavigationTab, Layout, Text } from '@ui-kitten/components';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from'@react-navigation/bottom-tabs';

import PersonalJournal from './src/components/PersonalJournal/PersonalJournal';
import GoodNews from './src/components/GoodNewsPage/GoodNews';

const { Navigator, Screen } = createBottomTabNavigator();

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

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])} >
      <BottomNavigationTab title ='JOURNAL'/>
      <BottomNavigationTab title ='GOOD NEWS'/>
    </BottomNavigation>
);



const TabNavigator = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />}>
    <Screen name='PersonalJournal' component={PersonalJournal}/>
    <Screen name='GoodNews' component={GoodNews}/>
  </Navigator>
);


export const AppNavigator = () => (
    <NavigationContainer>
      <TabNavigator/>
    </NavigationContainer>
);