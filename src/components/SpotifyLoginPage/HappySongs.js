import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';

import Listing from './Listing';
import token from './api/token';
import search from './api/searchHappy';

const PAGE = 20;

export class HappyScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      songs: [],
      offset: 0,
      query: '',
      isFetching: false,
      isEmpty: false,
      token: null,
      isTokenFetching: false,
    };
  }

  async loadNextPage() {
    const { songs, offset, query, token, isFetching, isEmpty } = this.state;

    if (isFetching || isEmpty) {
      return;
    }

    this.setState({ isFetching: true });

    const newSongs = await search({
      offset: offset,
      limit: PAGE,
      q: query,
      token,
    });

    if (newSongs.length === 0) {
      console.log('no songs found. there may be an error');
      this.setState({ isEmpty: true });
    }
  
    this.setState({
      isFetching: false,
      songs: [...songs, ...newSongs],
      offset: offset + PAGE,
    });
  }

  async refreshToken() {
    this.setState({
      isTokenFetching: true,
    });

    const newToken = await token();

    this.setState({
      token: newToken,
      isTokenFetching: false,
    });
  }

  async componentDidMount() {
    await this.refreshToken();
    await this.loadNextPage();
  }

  handleSearchChange(text) {
    // reset state
    this.setState({
      isEmpty: false,
      query: text,
      offset: 0,
      songs: [],
    }, () => {
      this.loadNextPage();
    });

    console.log('search text is', text);
  }

  async handleEndReached() {
    await this.loadNextPage();    
  }

  render() {
    const { songs, query, isFetching } = this.state;

    return (
      <View style={styles.container}>
        <Text>Here are some songs based on your mood!</Text>
        {
          (isFetching && songs.length === 0)
            ? <ActivityIndicator />
            : <Listing
              items={songs}
              onEndReached={() => this.handleEndReached()}
            />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightsteelblue',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    margin: 10,
  },
});