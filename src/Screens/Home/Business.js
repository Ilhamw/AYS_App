import React, { Component } from 'react'
import { View, Text, TextInput, TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { connect } from 'react-redux'

export class Business extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#F0F0F0' }}>
                <View style={{ backgroundColor: "#FFF", borderTopStartRadius: 5, borderTopEndRadius: 5 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: 'rgb(180,180,180)', marginVertical: 3, marginHorizontal: 5, paddingHorizontal: 10, borderRadius: 30 }}>
                        <TouchableWithoutFeedback
                            onPress={() => { this.input.focus() }} >
                            <Icon name="search" color="rgb(180,180,180)" size={18} style={{ flex: 0, marginHorizontal: 5 }} />
                        </TouchableWithoutFeedback>
                        <TextInput placeholder="Search Businesses..." ref={input => { this.input = input }} style={{ flex: 1, fontSize: 18, fontWeight: 'bold' }}
                            onChangeText={async e => {
                                const name = e.replace(' ', '_').toLowerCase()
                                await this.setState({ searchInput: name })
                                await this.props.getSearch(this.state.searchInput)
                                this.setState({ movies: this.props.docs })
                            }}
                            onBlur={async () => {
                                await this.props.getSearch(this.state.searchInput)
                                this.setState({ movies: this.props.docs })
                            }} />
                    </View>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps)(Business)
