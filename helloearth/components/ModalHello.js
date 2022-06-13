/* eslint-disable jsx-quotes */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, Button, View, Alert, Modal } from 'react-native';

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
    button: {
        backgroundColor: '#81945F',
        margin: 5,
        borderRadius: 5,
    },
});


export const ModalHello = () => {
    const [text, setText] = useState('...');
    const [submitted, setSubmitted] = useState(false);

    const onTextInput = (value) => {
        setText(value);
    };

    const onButtonPress = () => {
        if (text.length > 3) {
            setSubmitted(!submitted);
        } else {

        }
    };

    //TODO
    return (
        <SafeAreaView style={styles.container}>
            <Modal
                visible={false}
            >
                <Text> The name must be longer than 3 characters. </Text>
            </Modal>
            <Text style={styles.text}> Please Enter the Text:</Text>
            <TextInput style={styles.input}
                placeholder='e.g Christo'
                onChangeText={(value) => { onTextInput(value); }}
                keyboardType='default'
                maxLength={22}
                editable={!submitted}
            //secureTextEntry
            //multiline
            />
            <View style={styles.button}>
                <Button
                    title={submitted ? 'Clear' : 'Submit'}
                    color='#FFFFFF'
                    onPress={() => { onButtonPress(); }} />
            </View>
            {submitted ? <Text style={styles.text}> Registered Name: {text}</Text> : null}

        </SafeAreaView>
    );
};
