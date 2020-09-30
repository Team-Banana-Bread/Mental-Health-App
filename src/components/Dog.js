/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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

export default class App extends React.Component {

constructor(props){
  super(props);
  this.state = {
    isLoading: true,
    dataSource: null,
  }
}

componentDidMount (){

  return fetch('https://dog.ceo/api/breeds/image/random')
    .then ( (response) => response.json() )
    .then( (responseJson) => {

      this.setState({
        isLoading: false,
        dataSource: responseJson.message,
      })

    })

    .catch((error) => {
      console.log(error)
    })


}


  render(){

    if (this.state.isLoading) {

      return (
        <View style={styles.sectionContainer}>
          <Text>Loading...</Text>
        </View>
      )

    } else {

      let movies = this.state.dataSource.map((val, key) => {
        return <View key={key} style={styles.item}>
              <Text>{val.data.title}</Text>
              <Icon name="md-menu" size={30} />
        </View>
      });

      return (

        <View style={styles.item}>
          {movies}
        </View>

      );

    }

  }
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  item: {
    flex: 1,
    alignSelf: 'stretch',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  }
});