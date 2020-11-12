import React from 'react';
import { Button, Layout, Text } from '@ui-kitten/components';
import { StyleSheet } from 'react-native'

export const HomeScreen = ({ navigation }) => {

    const navigationLogin = () => {
        navigation.navigate('Login');
    };

    return (
            <Layout style= { styles.layoutStyle }>
                <Text style = { styles.titleStyle } category='h1'>Serenity</Text>
                <Button style = { styles.buttonStyle} onPress={navigationLogin}>Get Started</Button>
            </Layout>
    );
};

const styles = StyleSheet.create({

    layoutStyle: {
        backgroundColor: 'lightsteelblue',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    titleStyle: {
        fontSize: 48,
        fontWeight: "bold",
        color: 'linen',
        paddingBottom: 25
    },

    buttonStyle: {
        fontSize: 12,
        backgroundColor: '#31455a',
        color: 'linen',
        borderColor: 'transparent'
    }
})