/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, TextInput } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#7A7B3C',
    },
    text: {
        fontSize: 20,
        marginBottom: 3,
        marginTop: 3,
        marginLeft: 8,
    },
    input: {
        fontSize: 20,
        width: 200,
        borderWidth: 1,
        borderRadius: 2,
        backgroundColor: '#FFFFFF',
        margin: 5,
        textAlign: 'center',
    },
});


export const TextInputHello = () => {
    const [text, setText] = useState('...');

    const onTextInput = (value) => {
        setText(value);
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}> Please Enter the Text:</Text>
            <TextInput style={styles.input}
                placeholder='e.g Christo'
                onChangeText={(value) => { onTextInput(value); }}
                keyboardType='default'
                maxLength={22}
            //secureTextEntry
            //multiline
            />
            <Text>{text}</Text>
        </SafeAreaView>
    );
}