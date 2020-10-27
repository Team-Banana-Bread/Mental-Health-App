import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { Button } from '@ui-kitten/components';
import JournalEntry from './JournalEntry';

export const PersonalJournal = ({ route, navigation }) => {

    const entries = route.params?.entry ?? ''

        return(
            <View style = {styles.container}>
                <View style={styles.header}>
                <Text style={styles.headerText}> JOURNAL </Text>
                </View>
                
                
                <Button onPress={() => navigation.navigate('Entry')} style={styles.addButton}>
                    <Text style={styles.addButtonText}>+</Text>
                </Button>
                    
                <Text style={styles.entryText}>{entries}</Text>
            </View>
        );
        
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: 'lightsteelblue',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 5,
        borderBottomColor: 'lightsteelblue',
    },
    headerText: {
        color: 'white',
        fontSize: 20,
        padding: 26,
    },
    scrollContainer: {
        flex: 1,
        marginBottom: 100,
    },
    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 20,
        backgroundColor: 'lightsteelblue',
        width: 90,
        height: 90,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
        borderColor: "transparent"
    },
    addButtonText: {
        color: '#fff',
        fontSize: 24,
    },
    entryText: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#E91E63',
        borderBottomWidth: 2,
        borderBottomColor: '#ededed',
    },
});