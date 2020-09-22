import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import Registration from './src/components/Registration';

export default class App extends React.Component {

  render(){
    
      return (
        <View style={styles.container}>
          <Registration />
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

