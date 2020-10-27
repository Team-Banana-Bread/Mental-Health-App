import React, {useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { Button } from '@ui-kitten/components';
import { FlatList } from 'react-native-gesture-handler';

const JournalEntry = ({item, deleteItem}) => {
        return(
                <TouchableOpacity style={styles.entryItem}>
                    <View style={styles.entryItemView}>
                        <Text style={styles.entryItemText}>{item.text}</Text>
                        <Icon name="remove" size={20} color="firebrick" onPress={() => deleteItem(item.id)}/>
                    </View>
                </TouchableOpacity>
        );
        
};

const styles = StyleSheet.create({
    entryItem:{
        padding: 15,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
    entryItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    entryItemText: {
        fontSize: 18,
        
    }
});

export default JournalEntry;

