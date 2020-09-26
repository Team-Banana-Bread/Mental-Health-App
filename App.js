import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';

export default class App extends React.Component {

  render(){
    
      return (
          <ApplicationProvider {...eva} theme={eva.dark}>
             <HomeScreen />
          </ApplicationProvider>
      )

  } 
};

const HomeScreen = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text category='h1'>HOME</Text>
  </Layout>
);



