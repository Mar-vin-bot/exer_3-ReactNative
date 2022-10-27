import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default function DatailsScreen() {

    return (
        <View style={styles.containerDetails}>
            <Text>Details Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    containerDetails:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})


