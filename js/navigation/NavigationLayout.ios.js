import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import AboutScreen from '../screens/About';
import FavesScreen from '../screens/Faves';
import MapScreen from '../screens/Map';
import ScheduleScreen from '../screens/Schedule';
import SessionScreen from '../screens/Session';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors, typography} from '../config/styles';
import {grey} from 'ansi-colors';
import {sharedNavigationOptions} from './config';

const {black, mediumGrey, white} = colors;

const AboutStack = createStackNavigator(
  {
    About: AboutScreen,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation),
      initialRouteName: 'About',
      title: 'About',
    }),
  },
);

const FavesStack = createStackNavigator(
  {
    Faves: FavesScreen,
    Session: SessionScreen,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation),
      initialRouteName: 'Faves',
      title: 'Faves',
    }),
  },
);

const MapStack = createStackNavigator(
  {
    Maps: MapScreen,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation),
      initialRouteName: 'Maps',
      title: 'Maps',
    }),
  },
);

const ScheduleStack = createStackNavigator(
  {
    Schedule: ScheduleScreen,
    Session: SessionScreen,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation),
      initialRouteName: 'Schedule',
      title: 'Schedule',
    }),
  },
);

// Dedicated stacks for Schedule, Map and Faves will go here too!
export default createBottomTabNavigator(
  {
    Schedule: ScheduleStack,
    Maps: MapStack,
    Faves: FavesStack,
    About: AboutStack,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        const {routeName} = navigation.state;
        let iconName;
        if (routeName === 'Schedule') {
          iconName = 'ios-calendar';
        } else if (routeName === 'Maps') {
          iconName = 'ios-map';
        } else if (routeName === 'About') {
          iconName = 'ios-information-circle';
        } else if (routeName === 'Faves') {
          iconName = 'ios-heart';
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: white,
      inactiveTintColor: mediumGrey,
      tabStyle: {
        backgroundColor: black,
      },
      labelStyle: {
        fontSize: 10,
        fontFamily: typography.fontMain,
      },
      style: {
        backgroundColor: 'black',
      },
    },
  },
);
