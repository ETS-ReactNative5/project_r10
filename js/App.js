import React from 'react';
// import {SafeAreaView} from 'react-native';
import AboutScreen from './screens/About';
import RootStackNavigator from './navigation/RootStackNavigator';
import SafeAreaView from 'react-native-safe-area-view';
import {ApolloProvider} from 'react-apollo';
import client from './config/api';
import FavesProvider from './context/FavesContext';
const App = () => {
  return (
    <ApolloProvider client={client}>
      <FavesProvider>
        <RootStackNavigator />
      </FavesProvider>
    </ApolloProvider>
  );
};

export default App;
