import React from 'react';

import AboutScreen from './screens/About';
import RootStackNavigator from './navigation/RootStackNavigator';
import SafeAreaView from 'react-native-safe-area-view';
import {ApolloProvider} from 'react-apollo';
import client from './config/api';
import FavesProvider from './context/FavesContext';
import SplashScreen from 'react-native-splash-screen';

export default class App extends React.Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <ApolloProvider client={client}>
        <FavesProvider>
          <RootStackNavigator />
        </FavesProvider>
      </ApolloProvider>
    );
  }
}
