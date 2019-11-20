//stateful logic and state
import React, {Component} from 'react';
import {Text} from 'react-native';
import {gql} from 'apollo-boost';
import {Query} from 'react-apollo';
import {typography} from '../../config/styles';
import Session from './Session';
import Loader from '../../components/Loader';
import PropTypes from 'prop-types';

const GET_SESSION = gql`
  query session($id: ID!) {
    Session(id: $id) {
      id
      title
      description
      startTime
      location
      speaker {
        id
        bio
        name
        image
        url
      }
    }
  }
`;
class SessionContainer extends Component {
  static navigationOptions = {
    title: 'Session',
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: '500',
      fontSize: 22,
      fontFamily: typography.fontMain,
    },
  };

  render() {
    const {navigation} = this.props;

    return (
      <Query
        query={GET_SESSION}
        variables={{id: navigation.getParam('sessionId')}}>
        {({loading, error, data}) => {
          if (loading) return <Loader />;
          if (error) return <Text>Error ...</Text>;
          console.log(data.Session);
          if (data) return <Session session={data.Session} />;
        }}
      </Query>
    );
  }
}
SessionContainer.protoTypes = {
  navigation: PropTypes.object.isRequired,
};
export default SessionContainer;
