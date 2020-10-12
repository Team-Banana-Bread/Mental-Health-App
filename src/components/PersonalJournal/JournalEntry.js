import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

export default class JournalEntry extends React.Component {
    render() {
        return (
            <View key={this.props.keyval} style={styles.entry}>

                <Text styles={styles.entryText}>{this.props.val.date}</Text>
                <Text styles={styles.entryText}>{this.props.val.entry}</Text>

                <TouchableOpacity onPress={this.props.deleteMethod} style={styles.entryDelete}>
                    <Text style={styles.entryDeleteText}>Delete</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    entry: {
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: '#ededed',
    },
    entryText: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#E91E63',
    },
    entryDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2980b9',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10,
    },
    entryDeleteText: {
        color: 'white',
    }
});
