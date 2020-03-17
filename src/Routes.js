import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AuthLoadingScreen from './Screens/Auth/AuthLoading';
import Login from './Screens/Auth/Login';
import Register from './Screens/Auth/Register';
import Home from './Screens/Home/Home';

const AuthNav = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            headerShown: false
        }
    },

    Register: {
        screen: Register,
        navigationOptions: {
            headerShown: false
        }
    },

    Home: {
        screen: Home,
        navigationOptions: {
            headerShown: false
        }
    }
},{
    initialRouteName: "Home"
})

const SwitchNav = createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    Home: AuthNav
},
    {
        initialRouteName: "AuthLoading"
    }
)

export default createAppContainer(SwitchNav)