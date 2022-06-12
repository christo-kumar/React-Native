/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Button, StyleSheet, Linking } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F333FF',
    },
});

export const GoToUdemy = () => {
    return (
        <>
            <Text> My Course On Udemy </Text>
            <Button title='Try It' onPress={() => { Linking.openURL("https://www.udemy.com/course/learn-solidity-in-2-hours/learn/lecture/31771594#overview") }} />
        </>
    )
};