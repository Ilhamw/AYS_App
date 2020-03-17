import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

export class Bookmarks extends Component {

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#F0F0F0' }}>
                <Text> prop </Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Bookmarks)
