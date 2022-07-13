/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { useCamera } from 'react-native-camera-hooks';
//import RNFS


const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    camera: {
        flex: 1,
        justifyContent: 'flex-end',
        alignContent: 'center',

    },
});


export const CameraComponent = async () => {

    const [{ camerRef }, { takePicture }] = useCamera(null);

    const captureImage = async () => {
        try {
            const data = await takePicture();
            const targetPath = data.uri;
            //const destination = RNFS.ExternalDirectoryPath + /MyFile.jpg;
            //RNFS.moveFile(target)

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={styles.body}>
            <RNCamera
                ref={camerRef}
                type={RNCamera.Constants.Type.back}
                style={styles.camera}
            >
                <Button
                    title='Capture'
                    onPress={() => { captureImage() }}
                />

            </RNCamera>
        </View>
    );
}