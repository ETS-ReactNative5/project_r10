import React, {Component} from 'react';

import {Text} from 'react-native';

import {typography} from '../../config/styles';
import Faves from './Faves';
import {FavesContext} from '../../context/FavesContext';
import {gql} from 'apollo-boost';
import {Query} from 'react-apollo';

const GET_All_SESSIONS = gql`
  {
    allSessions {
      id
      title
      startTime
      location
      description
      speaker {
        id
        bio
        image
        name
        url
      }
    }
  }
`;

class FavesContainer extends Component {
  static navigationOptions = {
    title: 'Faves',
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: '500',
      fontSize: 22,
      fontFamily: typography.fontMain,
    },
  };
  render() {
    return (
      <FavesContext.Consumer>
        {({faveIds}) => {
          if (faveIds.length !== 0) {
            return (
              <Query query={GET_All_SESSIONS}>
                {({loading, error, data}) => {
                  if (loading) return <Text>loading...</Text>;
                  if (error) return <Text>{error.message}</Text>;

                  const favedSessions = data.allSessions.filter(session =>
                    faveIds.find(faveId => faveId === session.id),
                  );
                  return <Faves allFavedSessions={favedSessions} />;
                }}
              </Query>
            );
          } else {
            return <Faves />;
          }
        }}
      </FavesContext.Consumer>
    );
  }
}
export default FavesContainer;
