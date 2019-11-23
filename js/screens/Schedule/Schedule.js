import React from 'react';
import {Text, Button, View} from 'react-native';
import {formatSessionData} from '../../lib/helper';
import SessionsList from '../../components/SessionList';

const Schedule = ({navigation, allSessions}) => {
  const sortedSessions = formatSessionData(allSessions);
  return (
    <View>
      <SessionsList sessions={sortedSessions} />
    </View>
  );
};

export default Schedule;
