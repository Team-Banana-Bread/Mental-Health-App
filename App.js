import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ActivityIndicator, ImagePropTypes
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Icon from 'react-native-vector-icons/Ionicons';
import LoginPage from './src/components/LoginPage';
import { createStackNavigator } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';

export default class App extends React.Component {

  render(){
    
      return (
        <View style={styles.container}>
          <LoginPage />
        </View>
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

export default () => (
  <ApplicationProvider {...eva} theme={eva.dark}>
    <HomeScreen />
  </ApplicationProvider>
);

