
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Linking,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

export default class App extends React.Component {

constructor(props){
  super(props);
  this.state = {
    isLoading: true,
    dataSource: null,
  }
}

componentDidMount (){

  return fetch('https://www.reddit.com/r/UpliftingNews/new.json')
    .then ( (response) => response.json() )
    .then( (responseJson) => {

      this.setState({
        isLoading: false,
        dataSource: responseJson.data.children,
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
              <Text onPress={() => Linking.openURL(val.data.url_overridden_by_dest)}
                    style={styles.sectionDescription}>
                {val.data.title}
              </Text>
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
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: 'normal',
    fontFamily: 'normal',
    color: 'black',
  },
  item: {
    flex: 1,
    margin: 10,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#fff',
  }
});