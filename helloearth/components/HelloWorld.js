/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3349FF',
    },
});

export const HelloWorld = () => {
    return (
        <View>
            <Text> Hello World </Text>
        </View>


    );
};

