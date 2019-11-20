import React from 'react';
import {View, Text, SectionList} from 'react-native';
import styles from './styles';
import moment from 'moment';

const SessionsList = ({sessions}) => (
  <SectionList
    renderItem={({item}) => (
      <View>
        <Text>{item.title}</Text>
        <Text>{item.location}</Text>
      </View>
    )}
    renderSectionHeader={({section: {title}}) => (
      <View>
        <Text style={styles.header}>{moment(title).format('LT')}</Text>
      </View>
    )}
    sections={sessions}
    keyExtractor={item => item.id + ''}
    ItemSeparatorComponent={() => <View style={styles.itemSeperator} />}
  />
);

export default SessionsList;
