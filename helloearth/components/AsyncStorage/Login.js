/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, SafeAreaView, TextInput, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#0080ff',
    },
    text: {
        fontSize: 30,
        color: '#ffffff',
        margin: 10,
    },
    input: {
        width: 300,
        height: 50,
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 10,
        backgroundColor: '#ffffff',
    },
    buttonStyle: {
        backgroundColor: '#ffffff',
        borderColor: '#555',
        margin: 10,
        borderRadius: 10,
    },
});

export const Login = () => {

    const [userName, setUserName] = useState('Observe This..');

    const onTextChange = (txt) => {
        setUserName(txt);
    };

    const getData = () => {
        try {
            AsyncStorage.getItem('UserName').then((value) => {
                if (value.length > 0) {
                    console.log("*******");
                    console.log(value);
                }
            }
            );
        } catch (error) {
            console.log(error);
        }
    };

    const onBtnClick = async () => {
        if (userName.length === 0) {
            Alert('Warning', 'Please Enter Proper Name');
        } else {
            try {
                await AsyncStorage.setItem('UserName', userName);
            } catch (error) {
                console.log(error);
            }
        }
    };

    const checkStorage = () => {
        getData();
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}> {userName}</Text>
            <TextInput style={styles.input} onChangeText={(value) => { onTextChange(value) }} />
            <View style={styles.buttonStyle}>
                <Button title="Hello" onPress={() => { onBtnClick() }} />
            </View>

            <View style={styles.buttonStyle}>
                <Button title="Check" onPress={() => { checkStorage() }} />
            </View>


        </SafeAreaView>
    );
};
