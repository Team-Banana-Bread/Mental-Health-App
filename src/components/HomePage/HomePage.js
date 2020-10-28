import React from 'react';
import { Button, Layout, Text } from '@ui-kitten/components';
import { StyleSheet } from 'react-native'

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
        },

        buttonStyle: {
            fontSize: 12,
            backgroundColor: 'lightslategrey',
            color: 'linen'
        }
})

export const HomeScreen = ({ navigation }) => {

    const navigationLogin = () => {
        navigation.navigate('Login');
    };

    return (
            <Layout style= { styles.layoutStyle }>
                <Text style = { styles.titleStyle } category='h1'>Serenity</Text>
                <Button style = { styles.buttonStyle} onPress={navigationLogin}>Register now</Button>
            </Layout>
    );
};