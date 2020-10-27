import React, {useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    TouchableOpacity,
    Alert
} from 'react-native';
import { Button } from '@ui-kitten/components';
import JournalEntry from './JournalEntry';
import AddEntry from './AddEntry';
import { FlatList } from 'react-native-gesture-handler';
import { v4 as uuidv4 } from 'uuid';    

const PersonalJournal = () => {
    const [items, setItems] = useState([
    ]);

    const deleteItem = (id) => {
        setItems(previousItems => {
            return previousItems.filter(item => item.id != id);
        });
    };

    const addItem = (text) => {
        if(!text){
            Alert.alert('Error', 'Please enter something', [{text: "OK", onPress: () => console.log("OK Pressed")}], {cancelable: true }
            )}else{
            setItems(previousItems => {
                return [{id: uuidv4(), text},...previousItems];
            });
        }
    }

        return(
            <View style = {styles.container}>
                    <Text style={styles.header}> JOURNAL </Text>
                    <AddEntry addItem={addItem}/>
                    <FlatList
                        data={items} renderItem={({item}) => 
                        <JournalEntry item={item}
                        deleteItem={deleteItem}/> 
        }/>
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
        color: 'white',
        fontSize: 20,
        padding: 26,
        textAlign: 'center'
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

export default PersonalJournal;