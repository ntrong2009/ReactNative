import React from 'react';
import { View, StyleSheet } from 'react-native';

const FlexDirection = () => {
    return (
        <View style={styles.container}>
            <View style={styles.item1}></View>
            <View style={styles.item2}></View>
            <View style={styles.item3}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        width: '100%',
        height: 500,
        backgroundColor: '#A9F5E1',
        justifyContent: 'space-evenly',
        alignItems: 'stretch',
        flexWrap: 'nowrap',
        alignContent: 'flex-end'
    },
    item1: {
        width: 50,
        height: 50,
        backgroundColor: 'powderblue'
    },
    item2: {
        width: 50,
        height: 50,
        backgroundColor: 'skyblue'
    },
    item3: {
        width: 50,
        height: 50,
        backgroundColor: 'steelblue'
    }
})

export default FlexDirection;