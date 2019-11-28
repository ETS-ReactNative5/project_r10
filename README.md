# R10

R10 is a mobile app on both ios and android for a conference schedule by using react native.

# Installation

## Install dependencies

```
yarn install or npm install

```

## ios

need Xcode

```
react-native run-ios
```

## Android

need Android simulator

```
react-native run-android
```

Google-map: add API Key to android/app/src/main/androidManifest.xml

# Technology used

- react (stateful and stateless)
- react native
- Moment.js
- node.js
- Apollo client
- context
- Async and await
- AsyncStorage
- React Native Vector Icons

# ScreenShot

## IOS and Android

![Splash Screen ](_snapshots/splashscreen.png)

![Navbar ](_snapshots/navbar.png)

## Demo of the App

### IOS Demo:

![IOS Demo](_snapshots/ios.gif)

### Android Demo:

![Android Demo](_snapshots/android.gif)

# Personal Learnings

- Learned how to use React Native specific components and styling techniques
- Learned how to use Layout Animation and other Animation techniques
- Learned how to push and pop scenes in the stack
- Learned how to conditionally render components based on platform used
- Learned how to integrate Google maps in ios and android.
- Learned how to add customised markers in the maps.
- Learned how to add SplashScreen to the app.

# Author and Take-away

This is my first react native app. A lot of new technology and thinking process learned from the project.

## React Native:

React Native is an open-source mobile application framework created by Facebook. It is used to develop applications for Android, iOS, Web and UWP by enabling developers to use React along with native platform capabilities.

## React Native Navigation

1. Creating a stack navigator

```
import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
});

export default createAppContainer(AppNavigator);

```

2. export a component that just renders our AppNavigator stack navigator

```
const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

```

3. Route configuration shorthand

```
const AppNavigator = createStackNavigator({
  Home: HomeScreen,
});

```

## Layout Animation in React Native

```
import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Platform, UIManager} from 'react-native';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}
class AnimatedCollapsible extends React.Component {
  state = {expanded: false};
  render() {
    return (
      <View style={{overflow: 'hidden'}}>
        <TouchableOpacity
          onPress={() => {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
            this.setState({expanded: !this.state.expanded});
          }}>
          <Text>
            Press me to {this.state.expanded ? 'collapse' : 'expand'}!
          </Text>
        </TouchableOpacity>
        {this.state.expanded && <Text>I disappear sometimes!</Text>}
      </View>
    );
  }
}

```

## Google Maps in React Native

## Build configuration on IOS

1. Install the Library:

```
yarn add react-native-maps -E

```

2. Using CocoaPods (React Native 0.60 and higher):

```
cd ios
pod install
```

3. Enabling Google Maps on iOS (React Native all versions):

- obtain the Google API key and edit your AppDelegate.m as follows:

```
#import <GoogleMaps/GoogleMaps.h>

@implementation AppDelegate
...

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
+  [GMSServices provideAPIKey:@"AIzaSyAz6rTycU8X9DM9-d1MHV9R4jqznIIRpTM"];// add this line using the api key obtained from Google Console
...


```

4. Add the following to your Podfile above the use_native_modules! function and run pod install in the ios folder:

```
 # React Native Maps dependencies
  rn_maps_path = '../node_modules/react-native-maps'
  pod 'react-native-google-maps', :path => rn_maps_path
  pod 'GoogleMaps'
  pod 'Google-Maps-iOS-Utils'

```

## Build configuration on Android

1. Add dependencies :

```
...
dependencies {
   ...
   implementation(project(':react-native-maps')){
       exclude group: 'com.google.android.gms', module: 'play-services-base'
       exclude group: 'com.google.android.gms', module: 'play-services-maps'
   }
   implementation 'com.google.android.gms:play-services-base:10.0.1'
   implementation 'com.google.android.gms:play-services-maps:10.0.1'
}

```

2. Specify your Google Maps API Key:

Add your API key to your manifest file (android/app/src/main/AndroidManifest.xml):

```

<application>
   <!-- You will only need to add this meta-data tag, but make sure it's a child of application -->

        <meta-data
            android:name="com.google.android.geo.API_KEY"
            android:value="AIzaSyAz6rTycU8X9DM9-d1MHV9R4jqznIIRpTM"/>
</application>


```

## Map Component with MapMArker is as follows:

```
const Map = () => {
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 49.263397,
          longitude: -123.138267,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <MapView.Marker
          coordinate={{latitude: 49.263397, longitude: -123.138267}}
          title={'R10'}
          description={'R10 App'}>
          <Image
            source={require('../../assets/images/map_pin.png')}
            style={{width: 50, resizeMode: 'contain'}}
          />
        </MapView.Marker>
      </MapView>
    </View>
  );
};

```
