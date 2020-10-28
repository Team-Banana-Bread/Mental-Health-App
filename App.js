import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text, Button } from '@ui-kitten/components';
import { AppNavigator } from './Navigator';
import PersonalJournal from './src/components/PersonalJournal/PersonalJournal';
export default class App extends React.Component {

  render(){
    
      return (
          <ApplicationProvider {...eva} theme={eva.dark}>
            <AppNavigator/>
          </ApplicationProvider>
      )

  } 
};


