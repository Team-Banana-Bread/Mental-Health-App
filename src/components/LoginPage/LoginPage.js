import React from 'react';
import{
    StyleSheet,
    Text,
    View,
    TextInput,
} from 'react-native';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';


export const LoginScreen = () => (

            <View style = {styles.container}>
                <Text style={styles.header}>Registration</Text>

                <TextInput style={styles.textinput} placeholder="Email" 
                underlineColorAndroid={'transparent'} />

                <TextInput style={styles.textinput} placeholder="Name" 
                underlineColorAndroid={'transparent'} />

                <TextInput style={styles.textinput} placeholder="Password"
                secureTextEntry={true} 
                underlineColorAndroid={'transparent'} />

                <Button style={styles.button}>
                    <Text style={styles.btntext}> Sign up</Text>
                </Button>
            </View>
    );

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#36485f',
        paddingLeft: 60,
        paddingRight: 60,
    },
    header: {
        fontSize: 24,
        color: '#fff',
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor: '#199187',
        borderBottomWidth: 1,
    },
    textinput: {
        alignSelf: 'stretch',
        color: '#4157c7',
        height: 40,
        marginBottom: 35,
        borderBottomColor: '#f8f8f8',
        borderBottomWidth: 1,
    },
    button: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#59cbbd',
        marginTop: 30,
    },
    btntext:{
        color: '#fff',
        fontWeight: 'bold',
    }
});