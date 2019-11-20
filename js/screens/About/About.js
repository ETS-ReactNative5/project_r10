import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';

import styles from './styles';

const About = ({allConducts}) => (
  <ScrollView style={styles.container}>
    <View style={styles.headerView}>
      <Image
        style={styles.headerImage}
        source={require('../../assets/images/r10_logo.png')}
      />
    </View>
    <Text style={styles.bodyText}>
      R10 is a conference that focuses on just about any topic related to dev.
    </Text>
    <Text style={styles.openingTitle}>Date & Venue</Text>
    <Text style={styles.bodyText}>
      The R10 conference will take place on Tuesday, June 30, 2020 in Vancouver,
      BC.
    </Text>
    <Text style={styles.openingTitle}>Code Of Conduct</Text>
    {allConducts.map(conduct => (
      <View conduct={conduct} key={conduct.id}>
        <Text style={styles.title}>{conduct.title}</Text>
        <Text style={styles.text}>{conduct.description}</Text>
      </View>
    ))}
  </ScrollView>
);

export default About;
