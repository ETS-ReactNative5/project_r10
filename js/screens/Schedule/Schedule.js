import React from 'react';
import {Text, Button, View} from 'react-native';
import {formatSessionData} from '../../lib/helper';
import SessionsList from '../../components/SessionList';
import PropTypes from 'prop-types';

const Schedule = ({navigation, allSessions}) => {
  const sortedSessions = formatSessionData(allSessions);
  return (
    <View>
      <SessionsList sessions={sortedSessions} />
    </View>
  );
};

Schedule.protoTypes = {
  allSessions: PropTypes.Object,
};
export default Schedule;
