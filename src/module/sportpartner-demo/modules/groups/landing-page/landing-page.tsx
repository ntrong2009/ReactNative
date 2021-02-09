import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { text } from 'src/styles/_text';

import GroupCardItem from '../components/group-card-item';
import * as colorText from 'src/styles/_colorpalette';

export default class LandingPage extends Component {
    render() {
        return(
            <View>
                <View style={styles.landingHeader}>
                    <TextInput style={styles.inputSearchCity}></TextInput>
                    <Text style={[styles.landingTitle, text.mobileHeading1]}>Hi Rosalien,</Text>
                    <Text style={[styles.landingDescription, text.mobileParagraph2]}>See what's happening in your group</Text>
                    <View style={styles.landingGrFeature}>
                        <View style={styles.featureIconWrap}>
                            <View style={styles.featureIcon}></View>
                            <Text style={[styles.featureName, text.mobileParagraph3]}>Groups</Text>
                        </View>
                        <View style={styles.featureIconWrap}>
                            <View style={styles.featureIcon}></View>
                            <Text style={[styles.featureName, text.mobileParagraph3]}>Discover</Text>
                        </View>
                        <View style={styles.featureIconWrap}>
                            <View style={styles.featureIcon}></View>
                            <Text style={[styles.featureName, text.mobileParagraph3]}>Members</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.listGroupCard}>
                    <GroupCardItem></GroupCardItem>
                    <GroupCardItem></GroupCardItem>
                    <GroupCardItem></GroupCardItem>
                    <GroupCardItem></GroupCardItem>
                </View>
                <Text style={[styles.recentMsgTitle, text.mobileHeading2]}>Recent messages</Text>
                <View style={styles.recentMsgList}>
                    <View></View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    landingHeader: {
        backgroundColor: colorText.grayWarms.grayWarm5,
        padding: 20
    },
    listGroupCard: {
        padding: 20,
        backgroundColor: colorText.grayWarms.grayWarm6,
    },
    inputSearchCity: {
        backgroundColor: 'white',
        height: 50,
        borderRadius: 8
    },
    landingTitle: {
        width: '100%',
        textAlign: 'center',
        marginTop: 20,
        color: colorText.indigos.indigo2
    },
    landingDescription: {
        width: '100%',
        textAlign: 'center',
        marginTop: 5,
        color: '#525866'
    },
    landingGrFeature: {
        marginTop: 33,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',

    },
    featureIconWrap: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    featureIcon: {
        width: 80,
        height: 80,
        backgroundColor: 'white',
        borderRadius: 35
    },
    featureName: {
        marginTop: 15,
        color: colorText.grayCools.grayCool2
    },
    recentMsgTitle: {
        textAlign: 'center',
        padding: 20,
        color: colorText.indigos.indigo2
    },
    recentMsgList: {
        padding: 20,
        backgroundColor: colorText.grayWarms.grayWarm5
    },
    messageItem: {

    }
});