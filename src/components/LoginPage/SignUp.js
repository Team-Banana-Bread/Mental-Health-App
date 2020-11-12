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

    const navigationLogin = () => {
        navigation.navigate('Login');
    };

    return (                

            <View style = {styles.container}>

                <Button class = "arrow left" style = {styles.BackButton} onPress={navigationLogin}>
                    <Text style={styles.backButtonText}>Back</Text>
                </Button>

                <Text style={styles.header}>Sign Up</Text>

                <TextInput style={styles.textinput} placeholder="Name" placeholderTextColor = '#31455a'
                underlineColorAndroid={'transparent'} />  

                <TextInput style={styles.textinput} placeholder="Email" placeholderTextColor = '#31455a'
                underlineColorAndroid={'transparent'} />                

                <TextInput style={styles.textinput} placeholder="Password" placeholderTextColor = '#31455a'
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
        backgroundColor: 'lightsteelblue',
        paddingLeft: 60,
        paddingRight: 60,
    },
    header: {
        textAlign: 'center',
        fontSize: 24,
        color: '#31455a',
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor: '#f8f8f8',
        borderBottomWidth: 1,
    },
    textinput: {        
        alignSelf: 'stretch',
        color: '#31455a',
        height: 40,
        marginBottom: 35,
        borderBottomColor: '#f8f8f8',
        borderBottomWidth: 1,
    },
    SignUpText: {
        textAlign: 'center',
        color: '#31455a',
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
        width: '100%',
        borderColor: 'transparent'
    },
    buttonSignInTextColor:{
        color: '#fff',
        fontWeight: 'bold',
    },
    buttonSignUpTextColor:{
        color: '#31455a',
        fontWeight: 'bold',
    },
    BackButton: {
        color: '#31455a',
        backgroundColor:  '#b3f5f5',
        marginBottom: 35,
        width: '30%',
        borderColor: 'transparent'                                         
    },
    backButtonText: {
        color: '#31455a',
        fontWeight: 'bold',
    }
});