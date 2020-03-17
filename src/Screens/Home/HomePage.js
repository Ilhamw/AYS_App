import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native'
import Modal from 'react-native-modal';
import { connect } from 'react-redux'
// import { setDetailModal } from '../../redux/action/ArticleAction'
import { setDetailModal, getCategoryDetails } from '../../redux/action/CategoryAction'
import CategoryDetails from '../../Components/CategoryDetails'
import Styles from '../../Styles'

class HomePage extends Component {
    render() {
        const {
            detailModal
        } = this.props.category
        return (
            <View style={{ flex: 1, backgroundColor: '#F0F0F0' }}>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', backgroundColor: 'white', padding: 5, marginBottom: 15, justifyContent: 'space-around' }}>
                    {/* <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <TouchableOpacity style={Styles.categoryCards}>
                            <Image source={require('../../../assets/panik.png')} style={{ flex: 1, height: null, width: null }} />
                            <Text style={{ textAlign: 'center' }}>Panik</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.categoryCards}>
                            <Image source={require('../../../assets/panik.png')} style={{ flex: 1, height: null, width: null }} />
                            <Text style={{ textAlign: 'center' }}>Panik</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.categoryCards}>
                            <Image source={require('../../../assets/panik.png')} style={{ flex: 1, height: null, width: null }} />
                            <Text style={{ textAlign: 'center' }}>Panik</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <TouchableOpacity style={Styles.categoryCards}>
                            <Image source={require('../../../assets/kalm.png')} style={{ flex: 1, height: null, width: null }} />
                            <Text style={{ textAlign: 'center' }}>Kalm</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.categoryCards}>
                            <Image source={require('../../../assets/kalm.png')} style={{ flex: 1, height: null, width: null }} />
                            <Text style={{ textAlign: 'center' }}>Kalm</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.categoryCards}>
                            <Image source={require('../../../assets/kalm.png')} style={{ flex: 1, height: null, width: null }} />
                            <Text style={{ textAlign: 'center' }}>Kalm</Text>
                        </TouchableOpacity>
                    </View> */}
                    {this.props.article.categories.map(item => (
                        <TouchableOpacity key={item.id} style={Styles.categoryCards}
                            activeOpacity={0.7}
                            onPress={() => this.props.getCategoryDetails(item)}>
                            <Image source={item.image} style={{ flex: 1, height: null, width: null }} />
                            <Text style={{ textAlign: 'center' }}>{item.category}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <View style={{ backgroundColor: 'white', height: 'auto', padding: 10 }}>
                    <Text>Latest</Text>
                    <View style={{ paddingVertical: 10 }}>
                        <ImageBackground source={require('../../../assets/orang.png')} style={{ height: 150 }} >
                            <Text style={{
                                backgroundColor: 'green',
                                color: '#FFF',
                                width: 120,
                                textAlign: 'center',
                                fontSize: 18,
                                padding: 5
                            }}>Finance</Text>
                            <View style={{ flex: 1 }} />
                            <Text ellipsizeMode="tail" numberOfLines={2} style={{ backgroundColor: 'rgba(0,0,0,.5)', fontSize: 18, paddingVertical: 5, paddingHorizontal: 7.5, color: '#FFF', justifyContent: 'flex-end' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</Text>
                        </ImageBackground>
                    </View>
                </View>

                <Modal
                    isVisible={detailModal}
                    animationIn="fadeInUp"
                    animationOut="fadeOutDown"
                    onBackButtonPress={() => this.props.setDetailModal(false)}
                    style={{flex: 1, margin: 0}}
                    >
                    <CategoryDetails />
                </Modal>
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
    setDetailModal,
    getCategoryDetails
})(HomePage)
