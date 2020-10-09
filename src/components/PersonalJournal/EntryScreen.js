import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

export default class EntryScreen extends React.Component {
    static navigationOptions = {
        title: 'New Entry',
        headerShown: false,
    };

    state = {
        entryText: '',
    }

    render() {
        var d = new Date();
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}></Text>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.goBack()
                        }}
                        style={styles.backButton}>
                        <Text style={styles.backButtonText}> Back </Text>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(entryText) => this.setState({ entryText })}
                        value={this.state.entryText}
                        placeholder='New Entry'
                        multiline={true}
                        numberOfLines={30}
                        placeholderTextColor='grey'
                        underlineColorAndroid='transparent'>
                    </TextInput>
                </ScrollView>
                <View style={styles.buttonSection}>
                    <TouchableOpacity
                        onPress={() => {
                            receivedValue(entryArray.push({
                                'date': d.getFullYear() +
                                    "/" + (d.getMonth() + 1) +
                                    "/" + d.getDate(),
                                'entry': this.state.entryText
                            }))
                            this.props.navigation.goBack()
                        }}
                        style={styles.addButton}>
                        <Text style={styles.addButtonText}>Enter</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

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
        backgroundColor: '#97D3BF',
        padding: 10,
        borderRadius: 5,
        elevation: 8,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 24,
    },
    header: {
        backgroundColor: '#97D3BF',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        borderBottomWidth: 5,
        borderBottomColor: '#AECCC2',
    },
    backButton: {
        position: 'absolute',
        zIndex: 11,
        flexDirection: 'row',
        bottom: 10,
        left: 10,
        backgroundColor: '#97D3BF',
        padding: 10,
        borderRadius: 5,
        elevation: 8,
    },
    backButtonText: {
        color: '#fff',
        fontSize: 17,
    },
});