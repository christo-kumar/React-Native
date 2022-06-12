/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: '85%',
        width: '85%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#B8B31B',
        borderWidth: 10,
        borderColor: '#9F9C30',
        margin: 40,
    },
    text: {
        color: '#000000',
        fontSize: 40,
        fontStyle: 'italic',
        fontWeight: 'bold',
        margin: 10,
        textTransform: 'uppercase',
    },
    button: {
        width: 150,
        height: 50,
        backgroundColor: '#30929F',
        borderRadius: 5,
    },
});

//For updating the button style create a wrapper view and apply the styles on it.
export const StylesHello = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}> Enjoy Styling</Text>
            <View style={styles.button}>
                <Button title='Press Me Baby' />
            </View>

        </View>
    );
};
