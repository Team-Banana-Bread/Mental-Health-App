import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
} from 'react-native';
import { Button } from '@ui-kitten/components';

export const EntryScreen = ({ route, navigation }) => {

    
    const [text, entryText] = useState('')
    
    var d = new Date();

    const navigationJournal= () => {
        navigation.navigate('PersonalJournal');
    };

        
    return (

        <View style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.headerText}></Text>
                    <Button
                        onPress={navigationJournal}
                        style={styles.backButton}>
                        <Text style={styles.backButtonText}> Back </Text>
                    </Button>
                </View>
                <ScrollView>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={text => entryText( text )}
                        placeholder='New Entry'
                        multiline={true}
                        numberOfLines={30}
                        placeholderTextColor='grey'
                        underlineColorAndroid='transparent'>
                    </TextInput>
                </ScrollView>
                <View style={styles.buttonSection}>
                    <Button
                        onPress={() => 
                            navigation.navigate('PersonalJournal', {
                                entry: d.getFullYear() +
                                "/" + (d.getMonth() + 1) +
                                "/" + d.getDate() + "\n\n" + text
                            })
                        }
                        style={styles.addButton}>
                        <Text style={styles.addButtonText}>Enter</Text>
                    </Button>
                </View>
            </View>
        );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerText: {
        color: 'white',
        fontSize: 18,
        padding: 26,
    },
    scrollContainer: {
        flex: 1,
        marginBottom: 100,
    },
    textInput: {
        alignSelf: 'stretch',
        textAlignVertical: "top",
        color: 'black',
        padding: 20,
        backgroundColor: 'white',
        borderTopWidth: 2,
        borderTopColor: '#ededed',
    },
    addButton: {
        position: 'absolute',
        zIndex: 11,
        flexDirection: 'column',
        bottom: 20,
        right: 20,
        backgroundColor: 'lightsteelblue',
        padding: 10,
        borderRadius: 5,
        borderColor: "transparent"
    },
    addButtonText: {
        color: '#fff',
        fontSize: 24,
    },
    header: {
        backgroundColor: 'lightsteelblue',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        borderBottomWidth: 5,
        borderBottomColor: 'lightsteelblue',
    },
    backButton: {
        position: 'absolute',
        zIndex: 11,
        flexDirection: 'row',
        bottom: 10,
        left: 10,
        backgroundColor: 'lightsteelblue',
        padding: 10,
        borderRadius: 5,
        elevation: 8,
        borderColor: "transparent"
    },
    backButtonText: {
        color: '#fff',
        fontSize: 17,
    },
});