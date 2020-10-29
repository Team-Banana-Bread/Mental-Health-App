import React from 'react';
import {
  StyleSheet,
  View,
  Linking,
  Image,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
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

      let articles = this.state.dataSource.map((val, key) => {
        return <View key={key} style={styles.item}>
              <Image source={{uri:val.data.thumbnail}} style={ styles.imageStyle }/>
              <Text onPress={() => Linking.openURL(val.data.url_overridden_by_dest)}
                    style={styles.sectionDescription}>
                {val.data.title}
              </Text>
          </View> 
      });

      return (

        <ScrollView>
          <View style={styles.item}>
          {articles}
          </View>
        </ScrollView>

      );

    }

  } 
};

const styles = StyleSheet.create({

  sectionDescription: {
    marginTop: 10,
    marginBottom: 25,
    fontSize: 18,
    fontWeight: 'normal',
    fontFamily: 'sans-serif-medium',
    color: 'white',
  },

  item: {
    flex: 1,
    alignSelf: 'stretch',
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    borderBottomColor: '#eee',
    backgroundColor: 'lightsteelblue',
  },

  imageStyle: {
    width: 330,
    height: 165,
  }

});