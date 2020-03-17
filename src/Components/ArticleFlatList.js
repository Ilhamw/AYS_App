import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import { connect } from 'react-redux'

class ArticleFlatList extends Component {
    render() {
        return (
            <FlatList
                data={this.props.articles}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={{
                            backgroundColor: 'white',
                            marginBottom: 5,
                        }}
                        onPress={() => null}>
                        <Text
                            style={{
                                backgroundColor: this.props.focus == item.name ? "#FE024E" : "white",
                                borderRadius: 30,
                                overflow: 'hidden',
                                paddingVertical: 10,
                                paddingHorizontal: 15,
                                margin: 5,
                                textAlign: "center"
                            }}
                        >{item.name}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item._id}
            />
        )
    }
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps)(ArticleFlatList)
