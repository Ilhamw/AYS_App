import React from 'react';
import {
  ActivityIndicator,
  StatusBar,
  Image,
  View,
  Dimensions,
  ImageBackground
} from 'react-native';
import { connect } from 'react-redux';
import { getToken } from '../../redux/action/AuthAction'

class AuthLoadingScreen extends React.Component {
  componentDidMount = async () => {
    await this.getToken();
  }

  getToken = async () => {
    await this.props.getToken()
    console.log('asd', this.props.auth.token)
    this.props.navigation.navigate('Home');
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* <ActivityIndicator size="large" /> */}
        <StatusBar barStyle="default" />
        <ImageBackground source={require('../../../assets/splash-bg.png')}
          style={{
            height: Dimensions.get('window').height,
            width: Dimensions.get('window').width,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <Image source={require('../../../assets/logo.png')}
            style={{
              height: Dimensions.get('window').height / 3 ,
              width: Dimensions.get('window').height / 2 ,
            }} />
        </ImageBackground>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  user: state.user
})

export default connect(mapStateToProps, { getToken })(AuthLoadingScreen)