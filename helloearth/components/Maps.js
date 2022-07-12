/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    map: {

    }
});

export const mapComponent = () => {
    return (
        <View style={styles.body}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 37.7,
                    longitude: -122.2,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.041
                }
                }
            >

            </MapView>

        </View >
    );
}