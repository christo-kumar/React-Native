/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

//flex: 1 - Take the entire screen, otherwise it fits the size of the content
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch', // Child element takes entire screen along secondary axis.
        backgroundColor: '#842FC6',
    },
    box1: {
        flex: 1, //Takes only the size content along secondary axis if align item is not stretch in parent.
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#C4C62F',
        borderWidth: 5,
        borderColor: '#7A7B3C',
    },
    box2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#C4C62F',
        borderWidth: 5,
        borderColor: '#7A7B3C',
    },
    box3: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#C4C62F',
        borderWidth: 5,
        borderColor: '#7A7B3C',
    },
    text: {
        fontSize: 40,
        fontStyle: 'italic',
        fontWeight: 'bold',
        margin: 10,
    },
});

export const FlexHello = () => {
    return (
        <View style={styles.container}>
            <View style={styles.box1}>
                <Text style={styles.text}>1</Text>
            </View>
            <View style={styles.box2}>
                <Text style={styles.text}>2</Text>
            </View>
            <View style={styles.box3}>
                <Text style={styles.text}>3</Text>
            </View>
        </View>
    );
}