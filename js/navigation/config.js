import React from 'react';
import {StyleSheet, View, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Header} from 'react-navigation-stack';
import LinearGradient from 'react-native-linear-gradient';

import {colors, typography} from '../config/styles';
const {white, purple, red} = colors;

const GradientHeader = props => (
  <View style={{backgroundColor: white, overflow: 'hidden'}}>
    <LinearGradient
      colors={[red, purple]}
      start={{x: 0.0, y: 1.0}}
      end={{x: 1.0, y: 0.0}}
      style={[StyleSheet.absoluteFill, {height: 120, width: '100%'}]}
    />
    <Header {...props} />
  </View>
);

const MenuButton = ({navigation}) => (
  <Icon
    name="md-menu"
    size={25}
    color="white"
    onPress={navigation.openDrawer}
    style={{marginLeft: 10}}
  />
);
const BackButton = ({navigation}) => (
  <Icon
    name="md-arrow-back"
    size={25}
    color="white"
    onPress={() => navigation.goBack()}
    style={{marginLeft: 10}}
  />
);

export const sharedNavigationOptions = navigation => ({
  headerBackTitle: null,
  header: props => <GradientHeader {...props} />,
  headerStyle: {
    backgroundColor: 'transparent',
  },
  ...Platform.select({
    android: {
      headerLeft:
        navigation.state.routeName === 'Session' ? (
          <BackButton navigation={navigation} />
        ) : (
          <MenuButton navigation={navigation} />
        ),
    },
  }),
  headerTitleStyle: {
    color: white,
    fontFamily: typography.fontMain,
  },
  headerTintColor: {
    color: white,
  },
});
