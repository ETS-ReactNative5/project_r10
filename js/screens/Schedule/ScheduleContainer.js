import React, {Component} from 'react';
import Schedule from './Schedule';
import {gql} from 'apollo-boost';
import {Query} from 'react-apollo';
import Loader from '../../components/Loader';

const GET_All_SESSIONS = gql`
  {
    allSessions {
      id
      title
      startTime
      location
    }
  }
`;
class ScheduleContainer extends Component {
  render() {
    return (
      <Query query={GET_All_SESSIONS}>
        {({loading, error, data}) => {
          if (loading) return <Loader />;
          if (error) return <Text>{error.message}</Text>;
          console.log(data.allSessions);
          return (
            <Schedule
              navigation={this.props.navigation}
              allSessions={data.allSessions}
            />
          );
        }}
      </Query>
    );
  }
}
export default ScheduleContainer;
