import React from 'react';

import { BottomNavigation, BottomNavigationTab, Layout, Text } from '@ui-kitten/components';
import { createBottomTabNavigator } from'@react-navigation/bottom-tabs';
import PersonalJournal from './src/components/PersonalJournal/PersonalJournal';
import GoodNews from './src/components/GoodNewsPage/GoodNews';
import {MoodScreen} from './src/components/SpotifyLoginPage/Mood';
import { HappyScreen } from './src/components/SpotifyLoginPage/HappySongs';
import { SadScreen } from './src/components/SpotifyLoginPage/SadSongs';
import { ChillScreen } from './src/components/SpotifyLoginPage/ChillSongs';
import { AngryScreen } from './src/components/SpotifyLoginPage/AngrySongs';
import { MehScreen } from './src/components/SpotifyLoginPage/MehSongs';


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

const SongSuggesterScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text category='h1'>SONG SUGGESTER</Text>
  </Layout>
)

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])} >
      <BottomNavigationTab title ='JOURNAL'/>
      <BottomNavigationTab title ='GOOD NEWS'/>
      <BottomNavigationTab title='SONG SUGGESTER'/>
    </BottomNavigation>
);

export const TabNavigator = () => (

  <Navigator tabBar={props => <BottomTabBar {...props} />}>
    <Screen name='PersonalJournal' component={PersonalJournal}/>
    <Screen name='GoodNews' component={GoodNews}/>
    <Screen name='Mood' component={MoodScreen}/>
    <Screen name='HappySongsPage' component={HappyScreen}/>
    <Screen name='SadSongsPage' component={SadScreen}/>
    <Screen name='ChillSongsPage' component={ChillScreen}/>
    <Screen name='AngrySongsPage' component={AngryScreen}/>
    <Screen name='MehSongsPage' component={MehScreen}/>
    
  </Navigator>
);