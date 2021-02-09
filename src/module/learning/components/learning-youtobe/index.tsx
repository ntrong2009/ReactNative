import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Avatar extends Component {
    render() {
        console.log(this.props);
        const { width, height, borderRadius, backgroundColor } = this.props;
        return (
            <View style={{
                width,
                height,
                borderRadius,
                backgroundColor
            }}>
                <Text>avatar component</Text>
            </View>
        )
    }
}