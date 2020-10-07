import firebase from 'firebase';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, FlatList } from 'react-navigation';
import TabScreen1 from '../screens/TabScreen1';
import DetailsScreen from '../screens/DetailsScreen';
import TabScreen2 from '../screens/TabScreen2';
import DummyScreen from '../screens/DummyScreen';
import { createDrawerNavigator } from 'react-navigation-drawer';
import LogOut from './LogOut'
import Header from '../shared/header';
import { Text, TouchableOpacity, Button , Alert} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import FlashScreen from './FlashScreen';


const Navigator = createStackNavigator({
    Tab1: {
        screen: TabScreen1,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title="Tab1" />
            }
        }
    },
    Details: {
        screen: DetailsScreen,
        navigationOptions: {
            headerTitle: 'Details'
        }
    }
})

const Tab2Navigator = createStackNavigator({
    Tab2: {
        screen: TabScreen2,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title="Tab2" />
            }
        }

    }
})

const DummyTabNavigator = createBottomTabNavigator({
    TabBar1: {
        screen: Navigator,
        navigationOptions: {
            tabBarLabel: 'TabBar1',
            tabBarIcon: () => (
                <Icon name='ios-home' size={30} />
            )
        }
    },
    TabBar2: {
        screen: Tab2Navigator,
        navigationOptions: {
            tabBarLabel: 'TabBar2',
            tabBarIcon: () => (
                <Icon name='md-list' size={30} />
            )
        }
    }
})

const DummyScreenNavigator = createStackNavigator({
    DummyScreen: DummyScreen
})

const flash = createStackNavigator({
    flashScreen:FlashScreen
})

const mainNavigator = createDrawerNavigator({
    DashBoard: DummyTabNavigator,
    DummyScreen:{
        screen: DummyScreenNavigator,
        navigationOptions:{
            drawerIcon: () =>(
                <Icon name ='md-bookmark' size ={30} />
            )
        }
    },
    LogOut: {
        screen:LogOut,
        navigationOptions:{
            drawerIcon:()=>(
                <Icon name ='ios-log-out' size={30}/>
        )
        }
    },
})

export default createAppContainer(mainNavigator);