import React from 'react';
import {Text, Button, View} from 'react-native';

const Schedule = ({navigation}) => {
  return (
    <View>
      <Text>Hello Schedule</Text>
      <Button
        title="Go to Session"
        onPress={() => navigation.push('Session')}
      />
    </View>
  );
};

export default Schedule;
