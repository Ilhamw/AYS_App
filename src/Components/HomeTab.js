import React, { Component } from 'react'
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import HomePage from '../Screens/Home/HomePage';
import Article from '../Screens/Home/Article';
import Bookmarks from '../Screens/Home/Bookmarks';
import Business from '../Screens/Home/Business';

const HomeTab = createMaterialTopTabNavigator({
    Home: {
        screen: HomePage,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="home"
                    color={tintColor}
                    size={24}
                />
            ),
        }
    },

    Article: {
        screen: Article,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <IconM
                    name="file-document-box"
                    color={tintColor}
                    size={24}
                />
            ),
        }
    },
    
        Bookmarks: {
            screen: Bookmarks,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <IconM
                        name="bookmark"
                        color={tintColor}
                        size={24}
                    />
                ),
            }
        },

    Business: {
        screen: Business,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <IconM
                    name="run-fast"
                    color={tintColor}
                    size={24}
                />
            ),
        }
    },
},
    {
        tabBarPosition: "bottom",
        tabBarOptions: {
            upperCaseLabel: false,
            showIcon: true,
            tabStyle: {
                paddingVertical: 2,
                paddingHorizontal: 0
            },
            style: { backgroundColor: 'transparent' }
        },
    })

export default createAppContainer(HomeTab)