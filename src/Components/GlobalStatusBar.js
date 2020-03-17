import React, { Component } from 'react'
import { Text, View, StatusBar } from 'react-native'

export default class GlobalHeader extends Component {
    render() {
        return (
            <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
        )
    }
}

