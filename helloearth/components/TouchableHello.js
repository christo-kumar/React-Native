/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, Pressable } from 'react-native';

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
        margin: 5,
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
    button: {
        width: 150,
        margin: 5,
        backgroundColor: '#81945F',
        borderRadius: 5,
        alignItems: 'center',
    },
});


export const TouchableHello = () => {
    const [text, setText] = useState('...');
    const [submitted, setSubmitted] = useState(false);

    const onTextInput = (value) => {
        setText(value);
    };

    const onButtonPress = () => {
        setSubmitted(!submitted);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}> Please Enter the Text:</Text>
            <TextInput style={styles.input}
                placeholder="e.g Christo"
                onChangeText={(value) => { onTextInput(value); }}
                keyboardType="default"
                maxLength={22}
                editable={!submitted}
            //secureTextEntry
            //multiline
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => { onButtonPress(); }}
            >
                <Text style={styles.text}>{submitted ? 'Clear' : 'Submit'}</Text>
            </TouchableOpacity>
            {submitted ? <Text style={styles.text}> Registered Name: {text}</Text> : null}

        </SafeAreaView>
    );
};
