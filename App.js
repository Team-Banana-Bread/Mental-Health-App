import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import {
  StyleSheet,
} from 'react-native';

export default class App extends React.Component {

  render(){
    
      return (
          <ApplicationProvider {...eva} theme={eva.dark}>
             <HomeScreen />
          </ApplicationProvider>
      )

  } 
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#36485f',
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 60, 
    paddingRight: 60,
  }
});

const HomeScreen = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text category='h1'>HOME</Text>
  </Layout>
);



