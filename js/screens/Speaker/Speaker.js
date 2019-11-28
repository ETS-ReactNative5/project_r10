import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import {withNavigation} from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';

const Speaker = ({speaker, navigation}) => {
  const openLink = url =>
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.background}> */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          activeOpacity={0.5}>
          <Text style={styles.exit}>X</Text>
        </TouchableOpacity>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>About The Speaker</Text>
        </View>
      </View>
      <ScrollView style={styles.background}>
        <View style={styles.content}>
          <Image style={styles.image} source={{uri: speaker.image}} />
          <Text style={styles.name}>{speaker.name}</Text>
          <Text style={styles.bio}>{speaker.bio}</Text>
          <TouchableOpacity
            onPress={() => openLink(speaker.url)}
            style={styles.buttonContainer}
            activeOpacity={0.5}>
            <LinearGradient
              colors={['#9963ea', '#8797D6']}
              start={{x: 0.0, y: 1.0}}
              end={{x: 1.0, y: 0.0}}
              style={[StyleSheet.absoluteFill, styles.buttonBackground]}
            />
            <Text style={styles.buttonText}>Read More on Wikipedia</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {/* </View> */}
    </SafeAreaView>
  );
};
Speaker.protoTypes = {
  speaker: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    session: PropTypes.object,
    url: PropTypes.string,
    id: PropTypes.string,
  }),
  navigation: PropTypes.object.isRequired,
};

export default withNavigation(Speaker);
