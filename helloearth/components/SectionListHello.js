/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, RefreshControl, FlatList, SectionList } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },
    cell: {
        borderWidth: 0.5,
    },
    text: {
        fontSize: 20,
        marginBottom: 3,
        marginTop: 3,
        marginLeft: 8,
    },
    header: {
        backgroundColor: '#7A7B3C',
        borderWidth: 0.5,
    }
});

export const SectionListHello = () => {

    const [items, setItem] = useState([
        { name: 'Christo' },
        { name: 'Abhinav' },
        { name: 'Bittu' },
        { name: 'Ayaan' },
        { name: 'Nannu' },
    ]);

    const DATA = [
        { title: 'Dil Chahta Hai', data: ['Amir Khan', 'Prity Z'] },
        { title: 'Dangal', data: ['Amir Khan', 'No one knows'] },
    ];

    const [refresh, setRefresh] = useState(false);

    const onRefresh = () => {
        setRefresh(true);
        setItem([...items, { name: 'Mamma' }]);
        setRefresh(false);
    };

    const renderCell = (item) => {
        return (
            <View style={styles.cell} >
                <Text style={styles.text}>{item}</Text>
            </View>
        );
    };

    const renderHeader = (section) => {
        return (
            <View style={styles.header} >
                <Text style={styles.text}>{section.title}</Text>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <SectionList
                keyExtractor={(item, index) => index.toString()}
                sections={DATA}
                renderItem={({ item }) => (
                    renderCell(item)
                )}
                renderSectionHeader={({ section }) => (
                    renderHeader(section)
                )}
            />
        </SafeAreaView>
    );
}