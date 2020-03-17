import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StatusBar, Image } from 'react-native'
import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { setLoginModal, setRegisterModal } from '../../redux/action/AuthAction';
import { setProfileModal } from '../../redux/action/UserAction';
import Login from '../Auth/Login';
import Register from '../Auth/Register';
import ProfileModal from '../../Components/ProfileModal'
import GlobalStatusBar from '../../Components/GlobalStatusBar';
import HomeTab from '../../Components/HomeTab';
import Styles from '../../Styles';

class Home extends Component {
    render() {
        const { loginModal, registerModal } = this.props.auth
        const { profileModal, image } = this.props.user
        return (
            <View style={{ flex: 1 }}>
                <GlobalStatusBar />
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                    style={{ flex: 1, paddingTop: 20 }} colors={['#FC4C1B', '#F98127', '#EBA84A']}>
                    <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', padding: 10 }}>
                        <Text style={{ color: '#FFF', fontSize: 25, fontWeight: 'bold' }}>BukuSaku</Text>
                        <TouchableOpacity
                            onPress={() => {
                                {
                                    this.props.auth.token ?
                                        this.props.setProfileModal(true) :
                                        this.props.setLoginModal(true)
                                }
                            }}>
                            <Image source={image ? {uri: image} : require('../../../assets/avatar.png')} style={{ height: 40, width: 40, borderRadius: 20, borderWidth: 2, borderColor: '#FFF', overflow: 'hidden' }} />
                        </TouchableOpacity>
                    </View>
                    <HomeTab />
                </LinearGradient>

                <Modal
                    isVisible={loginModal}
                    animationIn="fadeInUp"
                    animationOut="fadeOutDown"
                    onBackButtonPress={() => this.props.setLoginModal(false)}
                    style={{ flex: 1, margin: 0 }}
                ><StatusBar translucent /><Login /></Modal>

                <Modal
                    isVisible={registerModal}
                    animationIn="slideInUp"
                    animationOut="slideOutDown"
                    onBackButtonPress={() => this.props.setRegisterModal(false)}
                    style={{ flex: 1, margin: 0 }}
                ><Register /></Modal>

                <Modal
                    isVisible={profileModal}
                    animationIn="slideInUp"
                    animationOut="slideOutDown"
                    onBackButtonPress={() => this.props.setProfileModal(false)}
                    style={{ flex: 1, margin: 0 }}
                ><ProfileModal /></Modal>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    user: state.user
})

export default connect(
    mapStateToProps, {
    setLoginModal,
    setRegisterModal,
    setProfileModal,
})(Home)
