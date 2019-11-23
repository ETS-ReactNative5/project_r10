//stateful logic and state
import React, {Component} from 'react';
import Loader from '../../components/Loader';
import {Text} from 'react-native';

import {gql} from 'apollo-boost';
import {Query} from 'react-apollo';
import About from './About';
import {typography} from '../../config/styles';

const GET_All_CONDUCTS = gql`
  {
    allConducts {
      id
      title
      description
    }
  }
`;

class AboutContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Query query={GET_All_CONDUCTS}>
        {({loading, error, data}) => {
          if (loading) return <Loader />;
          if (error) return <Text>{error.message}</Text>;
          // console.log(data.allConducts);

          return <About allConducts={data.allConducts} />;
        }}
      </Query>
    );
  }
}
export default AboutContainer;
