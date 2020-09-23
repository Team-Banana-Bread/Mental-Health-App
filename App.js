import React from 'react';
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

