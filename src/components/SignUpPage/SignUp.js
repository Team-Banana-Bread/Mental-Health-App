import React from 'react';
import{
    StyleSheet,
    Text,
    View,
    TextInput,
} from 'react-native';
import { Button } from '@ui-kitten/components';

export const SignUp = ({navigation}) => {    

    const navigationSignUp = () => {
        navigation.navigate('SignUp');
    };

    return (    

            <View style = {styles.container}>
                <Text style={styles.header}>Sign Up</Text>

                <TextInput style={styles.textinput} placeholder="Name" placeholderTextColor = '#f8f8f8'
                underlineColorAndroid={'transparent'} />  

                <TextInput style={styles.textinput} placeholder="Email" placeholderTextColor = '#f8f8f8'
                underlineColorAndroid={'transparent'} />                

                <TextInput style={styles.textinput} placeholder="Password" placeholderTextColor = '#f8f8f8'
                secureTextEntry={true} 
                underlineColorAndroid={'transparent'} />         

                <Button style={styles.buttonSignUp} onPress={navigationSignUp}>
                    <Text style={styles.buttonSignUpTextColor}> Sign up</Text>                    
                </Button>
            </View>
    )};        

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
    buttonSignIn: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#59cbbd',
        marginTop: 30,        
    },
    buttonSignUp: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 20,
        color: '#388585',
        backgroundColor: '#b3f5f5',
        marginTop: 30,
        width: '100%'
    },
    buttonSignInTextColor:{
        color: '#fff',
        fontWeight: 'bold',
    },
    buttonSignUpTextColor:{
        color: '#15424f',
        fontWeight: 'bold',
    }
});