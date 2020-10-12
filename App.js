import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Layout, Text, Button } from '@ui-kitten/components';
import { AppNavigator } from './Navigator';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

export default class App extends React.Component {

  render(){
    
      return ( 
        <>
          <ApplicationProvider {...eva} theme={eva.dark}>
            <AppNavigator/>
          </ApplicationProvider>
          <IconRegistry icons={EvaIconsPack} />
        </>
      )

  } 
};


