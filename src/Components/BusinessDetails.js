import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

class BusinessDetails extends Component {
    render() {
        return (
            <View>
                <Text> prop </Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

export default connect(mapStateToProps)(BusinessDetails)
