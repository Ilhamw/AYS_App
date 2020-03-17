import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Image, Dimensions, ActivityIndicator, ToastAndroid } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome'
import IconM from 'react-native-vector-icons/MaterialCommunityIcons'
import { connect } from 'react-redux'
import { setDetailModal } from '../redux/action/CategoryAction'

const deviceHeight = Dimensions.get("window").height
const deviceWidth = Dimensions.get("window").width

class CategoryDetails extends Component {
    render() {
        const {
            details,
            detailLoading,
        } = this.props.category

        if (detailLoading === true) {
            return (
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignContent: 'center',
                        height: deviceHeight,
                        backgroundColor: '#FDFBFC',
                    }}>
                    <ActivityIndicator size={50} color="#FF0B5B" style={{ opacity: 0.7 }} />
                </View>
            );
        }

        return (
            <View style={{ flex: 1, backgroundColor: '#F0F0F0', height: null, width: null }}>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                    style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, height: deviceHeight / 10 }} colors={['#FC4C1B', '#F98127', '#EBA84A']}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => this.props.setDetailModal(false)}>
                        <IconM name="arrow-left" color="#FFF" size={25} />
                    </TouchableOpacity>
                    <Text style={{ color: '#FFF', fontSize: 22, fontWeight: 'bold', marginHorizontal: 20 }}>{details.category}</Text>
                    <View style={{ flex: 1 }} />
                    <Icon name="search" color="#FFF" size={20} style={{ marginHorizontal: 15 }} />
                </LinearGradient>
                <TouchableWithoutFeedback 
                onPress={() => {
                    ToastAndroid.showWithGravity(
                        'Click',
                        ToastAndroid.SHORT,
                        ToastAndroid.BOTTOM,
                    ),
                    this
                }}>
                    <View style={{ flexDirection: 'row', backgroundColor: '#FFF', marginBottom: 10, padding: 15 }}>
                        <Image style={{ height: 100, width: 100, backgroundColor: 'gray' }} />
                        <View style={{ flex: 1, justifyContent: 'space-evenly', paddingHorizontal: 15 }}>
                            <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>REGOPANTES</Text>
                            <Text style={{ color: 'gray' }}>PT RegoPantes</Text>
                            <Text ellipsizeMode="tail" numberOfLines={1} style={{ color: 'gray' }}>RegoPanntes hadir sebagai jawaban untuk and Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    article: state.article,
    category: state.category
})

export default connect(
    mapStateToProps, {
    setDetailModal
})(CategoryDetails)
