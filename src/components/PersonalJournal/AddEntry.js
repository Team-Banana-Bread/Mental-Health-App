import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { Button } from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddEntry = ({title, addItem}) => {
    const [text, setText] = useState('');
    const onChange = (textValue) => setText(textValue);
    return(
        <View>
            <TextInput placeholder="New Entry" style={styles.input} 
                        onChangeText={onChange} blurOnSubmit={false} multiline={true} returnKeyType='none'/>
            <Button style={styles.btn} onPress={() => addItem(text)}>
                <Text style={styles.btnText}><Icon name="plus" size={20}/>Add Entry</Text>
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    input:{
        height: 60,
        padding: 8,
        fontSize: 16,
    },
    btn: {
        backgroundColor: '#c2bad8',
        padding: 9,
        margin: 5,
        borderColor: 'transparent'
    },
    btnText: {
        color: 'darkslateblue',
        fontSize: 20,
        textAlign: 'center',
    },
});

export default AddEntry;