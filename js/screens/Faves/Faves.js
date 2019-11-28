import React from 'react';
import {Text} from 'react-native';
import {formatSessionData} from '../../lib/helper';
import SessionList from '../../components/SessionList';
import PropTypes from 'prop-types';

const Faves = ({allFavedSessions}) => {
  if (!!allFavedSessions) {
    const sortedSessions = formatSessionData(allFavedSessions);
    return <SessionList sessions={sortedSessions} />;
  } else {
    return (
      <Text
        style={{
          flexDirection: 'row',
          textAlign: 'center',
          justifyContent: 'center',
          alignContent: 'center',
          fontSize: 25,
        }}>
        No Faved Session
      </Text>
    );
  }
};
Faves.protoTypes = {
  allFavedSessions: PropTypes.object.isRequired,
};
export default Faves;
