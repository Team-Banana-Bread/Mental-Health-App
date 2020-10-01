import React from 'react';
import{
    StyleSheet,
    Text,
    View,
    TextInput,
} from 'react-native';
import { Button } from '@ui-kitten/components';


export const LoginScreen = () => (

            <View style = {styles.container}>
                <Text style={styles.header}>Sign In</Text>

                <TextInput style={styles.textinput} placeholder="Email" placeholderTextColor = '#f8f8f8'
                underlineColorAndroid={'transparent'} />                

                <TextInput style={styles.textinput} placeholder="Password" placeholderTextColor = '#f8f8f8'
                secureTextEntry={true} 
                underlineColorAndroid={'transparent'} />

                <Button style={styles.button}>
                    <Text style={styles.btntext}> Sign in</Text>
                </Button>

                <Text style = {styles.SignUpText}>Don't Have an Account? </Text>

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
        textAlign: 'center',
        fontSize: 24,
        color: '#fff',
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor: '#199187',
        borderBottomWidth: 1,
    },
    textinput: {        
        alignSelf: 'stretch',
        color: '#f8f8f8',
        height: 40,
        marginBottom: 35,
        borderBottomColor: '#f8f8f8',
        borderBottomWidth: 1,
    },
    SignUpText: {
        textAlign: 'center',
        color: '#f8f8f8',
        marginTop: 30
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