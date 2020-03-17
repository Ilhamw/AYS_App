import React, { Component } from 'react'
import { View, Text, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux'

const deviceHeight = Dimensions.get("window").height
const deviceWidth = Dimensions.get("window").width

class ProfileModal extends Component {
    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#FFF' }}>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                    style={{ flex: 1, height: deviceHeight, width: deviceWidth }} colors={['#FC4C1B', '#F98127', '#EBA84A']}>
                    <TouchableOpacity
                    onPress={() => null}>
                        <Text>logout</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => ({

})

export default connect(
    mapStateToProps, {

})(ProfileModal)
