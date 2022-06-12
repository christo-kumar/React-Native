/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Button, View, Text } from 'react-native';

export const StateHello = () => {
    const [title, setTitle] = useState('');
    const [click, setClick] = useState(0);

    const onPressHard = () => {
        let newClick = click + 1;
        setClick(newClick);
        let newTitle = 'Click Count = ' + newClick;
        setTitle(newTitle);
    };

    return (
        <View>
            <Text> {title}</Text>
            <Button title="Press Me Hard" onPress={() => { onPressHard() }} />
        </View>
    );
};
