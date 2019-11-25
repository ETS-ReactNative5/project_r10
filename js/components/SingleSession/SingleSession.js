import React from 'react';
import {Text, View, TouchableOpacity, Platform} from 'react-native';
import {withNavigation} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import {FavesContext} from '../../context/FavesContext';

import styles from './styles';

const SingleSession = ({item, navigation}) => (
  <FavesContext.Consumer>
    {({faveIds}) => {
      return (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Session', {
              sessionId: item.id,
            });
          }}
          activeOpacity={0.5}
          style={styles.container}>
          <Text style={styles.title}>{item.title} </Text>
          <View style={styles.faveContainer}>
            <Text style={styles.location}>{item.location}</Text>
            {faveIds.includes(item.id) ? (
              <Icon
                name={Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'}
                size={16}
                color="#cf392a"
              />
            ) : null}
          </View>
        </TouchableOpacity>
      );
    }}
  </FavesContext.Consumer>
);

export default withNavigation(SingleSession);
