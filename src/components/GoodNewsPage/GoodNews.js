import React from 'react';
import {
  StyleSheet,
  View,
  Linking,
  Image
} from 'react-native';
import { Text } from '@ui-kitten/components';

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
              <Image source={{uri:val.data.thumbnail}} style={{width: 300, height: 150, marginTop: 50}}/>
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
    fontFamily: 'sans-serif-medium',
    color: '#e7e7e7',
  },
  item: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#213159',
  }
});