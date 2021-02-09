import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';

import { text } from 'src/styles/_text';

export default class GroupCardItem extends Component {
    render() {
        return (
            <View style={styles.groupCard}>
                <ImageBackground source={require('src/assets/images/sport.jpg')} resizeMode={'cover'} style={styles.imageBackGround}>
                    <View style={styles.infoCard}>
                        <View style={styles.groupName}>
                            <Text style={[styles.sportName, text.mobileHeading2]}>Wandelen</Text>
                            <Text style={[styles.cityName, text.mobileHeading2]}>Amsterdam</Text>
                        </View>
                        <View>
                            <Text>
                                <Text style={[styles.totalMember, text.mobileParagraph2]}>5 members</Text>
                                <View style={styles.dot}></View>
                                <Text style={[styles.totalMessage, text.mobileParagraph2]}>32 messages</Text>
                            </Text>
                        </View>
                    </View>
                    <View style={styles.newMessageIcon}>

                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    groupCard: {
        height: 220,
        width: '100%',
        backgroundColor: '#81F7F3',
        borderRadius: 8,
        overflow: 'hidden',
        position: 'relative',
        marginBottom: 20
    },
    imageBackGround: {
        width: '100%',
        height: '100%'
    },
    infoCard: {
        position: 'absolute',
        top: 113,
        left: 20
    },
    groupName: {

    },
    sportName: {
        color: 'white',
    },
    cityName: {
        color: 'white',
    },
    totalMember: {
        color: 'white'
    },
    dot: {
        width: 5,
        height: 5,
        backgroundColor: 'white',
        borderRadius: 5,
        marginLeft: 5,
        marginRight: 5
    },
    totalMessage: {
        color: 'white'
    },
    newMessageIcon: {
        width: 90,
        height: 40,
        backgroundColor: '#FF5533',
        position: 'absolute',
        top: 10,
        right: 10,
        borderRadius: 8
    }
})