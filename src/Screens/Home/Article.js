import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, TouchableWithoutFeedback, TextInput, FlatList, Animated, Easing } from 'react-native'
import { connect } from 'react-redux'
import { testFunction, bookmark } from '../../redux/action/ArticleAction'
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';

class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animation: new Animated.Value(1),
            bookmark: false
        }
    }

    animate = () => {
        Animated.timing(this.state.animation, {
            toValue: 2,
            duration: 350,
            easing: Easing.ease,
            useNativeDriver: true
        }).start(() => {
            this.state.animation.setValue(1)
        })
    }

    componentDidMount = async () => {
        await this.props.testFunction()
    }


    render() {
        const { list } = this.props.article

        const animateScale = this.state.animation.interpolate({
            inputRange: [1, 1.5, 2],
            outputRange: this.state.bookmark ? [1, 1.2, 1] : [1, 0.95, 1]
        });

        const animateOpacity = this.state.animation.interpolate({
            inputRange: [1, 1.2, 2],
            outputRange: this.state.bookmark ? [1, 0.5, 1] : [1, 0.9, 1]
        });

        const animateWobble = this.state.animation.interpolate({
            inputRange: [1, 1.25, 1.5, 1.75, 2],
            outputRange: this.state.bookmark ? ["0deg", "-1deg", "1deg", "0deg", "0deg"] : [0, 0, 0, 0, 0]
        });

        const animationStyle = {
            transform: [{ scale: animateScale }, { rotate: animateWobble }],
            opacity: animateOpacity
        };

        return (
            <View style={{ flex: 1, backgroundColor: '#F0F0F0' }}>
                <FlatList
                    data={list}
                    renderItem={({ item }) => (
                        <View style={{ backgroundColor: '#FFF', padding: 20, marginBottom: 10 }}>
                            <Text style={{
                                backgroundColor: item.category == 'Marketplace' ? 'orange' :
                                    item.category == "Agriculture" ? "lightgreen" :
                                        item.category == "Health" ? "pink" :
                                            item.category == "Education" ? "lightblue" :
                                                item.category == "Finance" ? "green" :
                                                    item.category == "Logistics" ? "gold" : null,
                                color: '#FFF',
                                width: 120,
                                textAlign: 'center',
                                fontSize: 18,
                                padding: 5

                            }}>{item.category}</Text>
                            <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                                <Text numberOfLines={3} style={{ flex: 2, fontSize: 20, fontWeight: 'bold' }}>{item.title}</Text>
                                <Image source={{ uri: item.image }} style={{ flex: 1, height: 'auto', width: 'auto' }} />
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ flex: 2, color: 'gray' }} ellipsizeMode="clip" numberOfLines={3}>{item.description}</Text>
                                <TouchableWithoutFeedback
                                    onPress={() => { this.setState({ bookmark: !this.state.bookmark }), this.animate() }}>
                                    <View style={{ flex: 1, alignItems: 'center' }}>
                                        <Animated.View style={animationStyle}>
                                            <IconM name={this.state.bookmark ? "bookmark" : "bookmark-outline"} size={45} color={this.state.bookmark ? "gold" : "gray"} />
                                            <Text style={{ textAlign: 'center' }}>{this.state.bookmark ? "Saved" : "Save"}</Text>
                                        </Animated.View>
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                        </View>
                    )
                    }
                    keyExtractor={item => item.category}
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    article: state.article
})

export default connect(mapStateToProps, { testFunction, bookmark })(Article)