import React from 'react';
import { ApplicationProvider, Layout, Text, Button, TopNavigation } from '@ui-kitten/components';

export const HomeScreen = ({ navigation }) => {

    const navigationLogin = () => {
        navigation.navigate('Spotify');
    };

    return (
            <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <TopNavigation title='Home' alignment='center'/>
                <Button onPress={navigationLogin}>Test</Button>
            </Layout>
    );
};