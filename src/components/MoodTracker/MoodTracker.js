// will be renamed
import React from 'react';
import { SafeAreaView } from 'react-native';
import { Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';


export const SongSuggestion = () => {  
    return (
        <SafeAreaView style={{ flex: 1 }}>
          <TopNavigation title='SpotifyPage' alignment='center' accessoryLeft={BackAction}/>
          <Divider/>
          <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text category='h1'>Here are some songs we've picked based on your mood</Text>
          </Layout>
        </SafeAreaView>
      );
};