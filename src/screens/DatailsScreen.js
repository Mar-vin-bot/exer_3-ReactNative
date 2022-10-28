import React from 'react';
import {View, Text, Alert} from 'react-native';
import Card from '../components/Card';

export default function DatailsScreen({route}) {

const {id} = route.params;

    return (
        <View style={{flex: 1, justifyContent: "center",alignItems: "center"}}>
            <Card id={id} onPress={() => Alert.alert('fim')} />
        </View>
    );
}


        



