/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

import React from 'react';
import { FlatList, Text } from 'react-native';
import renderer from 'react-test-renderer';
import { Snapshot } from './Snapshot';

//Component name can be anything
//Component snapshot would be created in Snapshot.test.js.snap
//If UI changes later this test would fail
//Delete the snapshot if UI changes later
test('render conrrectly', () => {
    const tree = renderer.create(<Snapshot />).toJSON();
    expect(tree).toMatchSnapshot();
});

it('test rendering of flatList', () => {
    const tree = renderer.create(
        <FlatList
            data={['1', '2', '3']}
            keyExtractor={(index, value) => index.toString()}
            renderItem={({ item }) => <Text> item </Text>}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
