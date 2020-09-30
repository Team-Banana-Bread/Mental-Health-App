import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text, Button } from '@ui-kitten/components';
import { AppNavigator } from './Navigator';
import GoodNews from './src/components/GoodNewsPage/GoodNews';
import { ScrollView } from 'react-native-gesture-handler';

export default class App extends React.Component {

  render(){
    
      return (
          <ApplicationProvider {...eva} theme={eva.dark}>
            <ScrollView>
            <GoodNews/>
            </ScrollView>
          </ApplicationProvider>
      )

  } 
};


