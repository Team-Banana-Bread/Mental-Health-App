/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export const MoodScreen = ({ navigation }) => {

  const navigationHappy = () => {
    navigation.navigate('HappySongsPage');
  };

  const navigationSad = () => {
    navigation.navigate('SadSongsPage');
  };

  const navigationChill = () => {
    navigation.navigate('ChillSongsPage');
  };

  const navigationAngry = () => {
    navigation.navigate('AngrySongsPage');
  };

  const navigationMeh = () => {
    navigation.navigate('MehSongsPage');
  };

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>How are you feeling today?</Text>
        <View style={styles.moodContainer}>
          <TouchableOpacity onPress={navigationHappy}>
            <FontAwesomeIcon name="smile-o" size={65} color="green" style={styles.icon}  />
          </TouchableOpacity>
          <TouchableOpacity onPress={navigationSad}>
            <FontAwesomeIcon name="frown-o" size={70} color="purple" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={navigationChill}>
            <MaterialCommunityIcon name="emoticon-cool-outline" size={72} color="blue" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={navigationAngry}>
            <FontAwesome5Icon name="angry" size={63} color="red" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={navigationMeh}>
            <FontAwesomeIcon name="meh-o" size={70} color="grey" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightsteelblue',
  },
  quotesContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  icon: {
    margin: 10,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  quote: {
    fontSize: 22,
    fontWeight: '700',
    textAlign:'center',
    margin: 10,
    color: "#f8f8f8"
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  moodContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    padding: 10
  }
});