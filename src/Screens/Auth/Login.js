import React, { Component } from 'react'
import { View, Text, SafeAreaView, ScrollView, Dimensions, TouchableOpacity, Image, ImageBackground, TextInput, ToastAndroid, ActivityIndicator, StatusBar, Keyboard } from 'react-native'
import GlobalStatusBar from '../../Components/GlobalStatusBar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { setAuthLoading, setLoginModal, setRegisterModal, login } from '../../redux/action/AuthAction'
import { connect } from 'react-redux'
import Styles from '../../Styles'

const deviceHeight = Dimensions.get("window").height
const deviceWidth = Dimensions.get("window").width

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            hidePass: true
        }
    }

    componentDidMount = async () => {

    }

    render() {
        const { isLoading } = this.props.auth
        return (
            <ScrollView style={{ flex: 1 }}>
                {isLoading ? <View style={{ height: deviceHeight, width: deviceWidth, position: 'absolute', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1, }}>
                    <ActivityIndicator size={50} color="#FF0B5B" style={{ opacity: 0.7 }} />
                </View> : null}
                <ImageBackground source={require('../../../assets/splash-bg.png')} style={{ flex: 1, height: null, width: null }} >
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => this.props.setLoginModal(false)}>
                        <Icon name="arrow-left" color="#FFF" size={30} />
                    </TouchableOpacity>
                    <View style={{ flex: 1, paddingHorizontal: 20 }}>
                        <View style={{ flex: 0, alignItems: 'center', padding: 10, marginBottom: 10 }}>
                            <Image source={require('../../../assets/logo.png')} style={{ height: 200, width: 300 }} />
                            {/* <Text style={{ fontSize: 40, fontWeight: 'bold', color: '#FFF' }}>BukuSaku</Text> */}
                        </View>
                        <View style={{ flex: 1 }}>
                            <View style={Styles.input}>
                                <Icon name="email" color="#FFF" size={25} style={{ marginHorizontal: 5 }}
                                    onPress={() => this.emailInput.focus()} />
                                <TextInput keyboardType='email-address' style={{ flex: 1, fontSize: 20, color: '#FFF' }} placeholder='Email' placeholderTextColor="#FFF"
                                    onChangeText={value => this.setState({ email: value })}
                                    returnKeyType={"next"}
                                    ref={input => this.emailInput = input}
                                    onSubmitEditing={() => { this.passInput.focus(); }}
                                    blurOnSubmit={false}></TextInput>
                            </View>
                            <View style={Styles.input}>
                                <Icon name="lock" color="#FFF" size={25} style={{ marginHorizontal: 5 }}
                                    onPress={() => this.passInput.focus()} />
                                <TextInput secureTextEntry={this.state.hidePass} style={{ flex: 1, fontSize: 20, color: '#FFF' }} placeholder='Password' placeholderTextColor="#FFF"
                                    onChangeText={value => this.setState({ password: value })}
                                    ref={(input) => { this.passInput = input; }}
                                    onSubmitEditing={() => { Keyboard.dismiss() }}
                                    blurOnSubmit={false}></TextInput>
                                <Icon name={this.state.hidePass ? "eye-off" : "eye"} color="#FFF" size={22} style={{ marginHorizontal: 5 }}
                                    onPress={() => this.setState({ hidePass: !this.state.hidePass })} />
                            </View>
                            <View style={{ flex: 1, justifyContent: 'space-evenly', paddingBottom: 90 }}>
                                <TouchableOpacity
                                    disabled={this.state.email !== '' && this.state.password !== '' ? null : true}
                                    activeOpacity={0.7}
                                    onPress={() => {
                                        this.props.login(
                                            this.state.email,
                                            this.state.password
                                        )
                                    }}>
                                    <Text style={{
                                        backgroundColor: this.state.email !== '' && this.state.password !== '' ? 'rgba(255,215,0,.5)' : 'rgb(220,220,220)',
                                        borderColor: this.state.email !== '' && this.state.password !== '' ? 'orange' : 'rgb(200,200,200)',
                                        textAlign: 'center',
                                        fontSize: 20,
                                        fontWeight: 'bold',
                                        color: '#FFF',
                                        borderRadius: 30,
                                        borderWidth: 2,
                                        marginVertical: 40,
                                        paddingVertical: 12,
                                        overflow: 'hidden'
                                    }}>LOGIN</Text>
                                </TouchableOpacity>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15 }}>
                                    <TouchableOpacity onPress={() => this.props.setRegisterModal(true)}>
                                        <Text style={{ color: '#FFF', fontWeight: 'bold' }}>Create Account</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() =>
                                            ToastAndroid.showWithGravityAndOffset(
                                                'lol nope',
                                                ToastAndroid.SHORT,
                                                ToastAndroid.BOTTOM,
                                                0,
                                                200
                                            )} >
                                        <Text style={{ color: '#FFF', fontWeight: 'bold' }}>Forgot Password?</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            {/* <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('Home')}>
                                <Text>Home</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('Register')}>
                                <Text>Register</Text>
                            </TouchableOpacity> */}
                        </View>
                    </View>
                </ImageBackground>
            </ScrollView >
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(
    mapStateToProps, {
    setAuthLoading,
    setLoginModal,
    setRegisterModal,
    login
})(Login)
