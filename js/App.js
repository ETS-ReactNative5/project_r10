import React from 'react';
// import {SafeAreaView} from 'react-native';
import AboutScreen from './screens/About';
import RootStackNavigator from './navigation/RootStackNavigator';
import SafeAreaView from 'react-native-safe-area-view';
import {ApolloProvider} from 'react-apollo';
import client from './config/api';
const App = () => {
  return (
    <ApolloProvider client={client}>
      <RootStackNavigator />
    </ApolloProvider>
  );
};

export default App;
