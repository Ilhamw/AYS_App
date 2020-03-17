import React, { Component } from 'react'
import { View, Text, SafeAreaView, ScrollView, Dimensions, TouchableOpacity, Image, ImageBackground, TextInput, ToastAndroid, ActivityIndicator, StatusBar, Keyboard } from 'react-native';
import GlobalHeader from '../../Components/GlobalStatusBar';
import Icon from 'react-native-vector-icons/FontAwesome'
import IconM from 'react-native-vector-icons/MaterialCommunityIcons'
import { setAuthLoading, setRegisterModal, register } from '../../redux/action/AuthAction'
import { connect } from 'react-redux'
import Styles from '../../Styles'

const deviceHeight = Dimensions.get("window").height
const deviceWidth = Dimensions.get("window").width

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            hidePass: true
        }
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
                        onPress={() => this.props.setRegisterModal(false)}>
                        <IconM name="arrow-left" color="#FFF" size={30} />
                    </TouchableOpacity>
                    <View style={{ flex: 1, paddingHorizontal: 20 }}>
                        <View style={{ flex: 0, alignItems: 'center', padding: 10, marginBottom: 10 }}>
                            <Image source={require('../../../assets/logo.png')} style={{ height: 200, width: 300 }} />
                            {/* <Text style={{ fontSize: 40, fontWeight: 'bold', color: '#FFF' }}>BukuSaku</Text> */}
                        </View>
                        <View style={{ flex: 1, paddingVertical: 10 }}>
                            <View style={Styles.regInput}>
                                <Icon name="user" color="#FFF" size={30} style={{ marginHorizontal: 7.5 }}
                                    onPress={() => this.nameInput.focus()} />
                                <TextInput style={{ flex: 1, fontSize: 20, color: '#FFF' }} placeholder='Name' placeholderTextColor="#FFF"
                                    onChangeText={value => this.setState({ name: value })}
                                    returnKeyType={"next"}
                                    ref={input => this.nameInput = input}
                                    onSubmitEditing={() => { this.emailInput.focus(); }}
                                    blurOnSubmit={false}></TextInput>
                            </View>
                            <View style={Styles.regInput}>
                                <IconM name="email" color="#FFF" size={25} style={{ marginHorizontal: 5 }}
                                    onPress={() => this.emailInput.focus()} />
                                <TextInput keyboardType='email-address' style={{ flex: 1, fontSize: 20, color: '#FFF' }} placeholder='Email' placeholderTextColor="#FFF"
                                    onChangeText={value => this.setState({ email: value })}
                                    returnKeyType={"next"}
                                    ref={input => this.emailInput = input}
                                    onSubmitEditing={() => { this.passInput.focus(); }}
                                    blurOnSubmit={false}></TextInput>
                            </View>
                            <View style={Styles.regInput}>
                                <IconM name="lock" color="#FFF" size={25} style={{ marginHorizontal: 5 }}
                                    onPress={() => this.passInput.focus()} />
                                <TextInput secureTextEntry={this.state.hidePass} style={{ flex: 1, fontSize: 20, color: '#FFF' }} placeholder='Password' placeholderTextColor="#FFF"
                                    onChangeText={value => this.setState({ password: value })}
                                    ref={(input) => { this.passInput = input; }}
                                    onSubmitEditing={() => { this.confInput.focus() }}
                                    blurOnSubmit={false}></TextInput>
                                <IconM name={this.state.hidePass ? "eye-off" : "eye"} color="#FFF" size={22} style={{ marginHorizontal: 5 }}
                                    onPress={() => this.setState({ hidePass: !this.state.hidePass })} />
                            </View>
                            <View style={Styles.regInput}>
                                <IconM name="lock" color="#FFF" size={25} style={{ marginHorizontal: 5 }}
                                    onPress={() => this.confInput.focus()} />
                                <TextInput secureTextEntry={this.state.hidePass} style={{ flex: 1, fontSize: 20, color: '#FFF' }} placeholder='Password Confirmation' placeholderTextColor="#FFF"
                                    onChangeText={value => this.setState({ password_confirmation: value })}
                                    ref={(input) => { this.confInput = input; }}
                                    onSubmitEditing={() => { Keyboard.dismiss() }}
                                    blurOnSubmit={false}></TextInput>
                                <IconM name={this.state.hidePass ? "eye-off" : "eye"} color="#FFF" size={22} style={{ marginHorizontal: 5 }}
                                    onPress={() => this.setState({ hidePass: !this.state.hidePass })} />
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', paddingBottom: 20 }}>
                                <TouchableOpacity
                                    onPress={() => {
                                        if (this.state.password !== this.state.password_confirmation) {
                                            ToastAndroid.show('Password and Password Confirmation does not Match', ToastAndroid.SHORT)
                                        } else {
                                            this.props.register(
                                                this.state.name,
                                                this.state.email,
                                                this.state.password,
                                                this.state.password_confirmation
                                            )
                                        }
                                    }}>
                                    <Text style={{
                                        backgroundColor: this.state.name !== '' && this.state.email !== '' && this.state.password !== '' && this.state.password_confirmation !== '' ? 'rgba(255,215,0,.5)' : 'rgb(220,220,220)',
                                        borderColor: this.state.name !== '' && this.state.email !== '' && this.state.password !== '' && this.state.password_confirmation !== '' ? 'orange' : 'rgb(200,200,200)',
                                        textAlign: 'center',
                                        fontSize: 20,
                                        fontWeight: 'bold',
                                        color: '#FFF',
                                        borderRadius: 30,
                                        borderWidth: 2,
                                        marginVertical: 30,
                                        paddingVertical: 12
                                    }}>REGISTER</Text>
                                </TouchableOpacity>
                            </View>
                            {/* <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('Home')}>
                                <Text>Home</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('Login')}>
                                <Text>Login</Text>
                            </TouchableOpacity> */}
                        </View>
                    </View>
                </ImageBackground>
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
})

export default connect(mapStateToProps, {
    setAuthLoading,
    setRegisterModal,
    register
})(Register)
