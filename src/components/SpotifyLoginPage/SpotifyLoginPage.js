// will be renamed
import React from 'react';
import { SafeAreaView } from 'react-native';
import { Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction, Button } from '@ui-kitten/components';
import authHandler from "./../utils/authenticationHandler";
  
export const SpotifyScreen = () => {  
    return (
        <SafeAreaView style={{ flex: 1 }}>
          <TopNavigation title='SpotifyPage' alignment='center' accessoryLeft={BackAction}/>
          <Divider/>
          <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button onPress={() => authHandler.onLogin()} title="Login to Spotify"/>
          </Layout>
        </SafeAreaView>
      );
};

export default LoginScreen;