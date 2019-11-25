import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import AboutScreen from '../screens/About';
import FavesScreen from '../screens/Faves';
import MapScreen from '../screens/Map';
import ScheduleScreen from '../screens/Schedule';
import SessionScreen from '../screens/Session';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors, typography} from '../config/styles';

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

MapStack.navigationOptions = {
  drawerIcon: ({tintColor}) => (
    <Icon name="md-map" size={25} color={tintColor} />
  ),
};
ScheduleStack.navigationOptions = {
  drawerIcon: ({tintColor}) => (
    <Icon name="md-calendar" size={25} color={tintColor} />
  ),
};
FavesStack.navigationOptions = {
  drawerIcon: ({tintColor}) => (
    <Icon name="md-heart" size={25} color={tintColor} />
  ),
};
AboutStack.navigationOptions = {
  drawerIcon: ({tintColor}) => (
    <Icon name="md-information-circle" size={25} color={tintColor} />
  ),
};

// Dedicated stacks for Schedule, Map and Faves will go here too!
export default createDrawerNavigator(
  {
    Schedule: ScheduleStack,
    Maps: MapStack,
    Faves: FavesStack,
    About: AboutStack,
  },
  {
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
    },
  },
);
