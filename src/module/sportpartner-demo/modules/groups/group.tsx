import React, { Component } from 'react';
import { View, Text } from 'react-native';

import LandingPage from './landing-page/landing-page';

export default class GroupPage extends Component {
    render() {
        return (
            <View>
                <LandingPage></LandingPage>
            </View>
        );
    }
}