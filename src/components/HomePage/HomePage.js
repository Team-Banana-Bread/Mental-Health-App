import React from 'react';
import { Button, Layout, Text } from '@ui-kitten/components';

export const HomeScreen = ({ navigation }) => {

    const navigationLogin = () => {
        navigation.navigate('Login');
    };

    return (
            <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text category='h1'>HOME</Text>
                <Button onPress={navigationLogin}>Test</Button>
            </Layout>
    );
};