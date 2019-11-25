import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  LayoutAnimation,
  Animated,
  Easing,
  Platform,
  UIManager,
} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default class CodeOfConducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      translateValue: new Animated.Value(0),
      sign: true,
    };
  }

  animatePlus = () => {
    Animated.timing(this.state.translateValue, {
      toValue: 1,
      duration: 500,
      easing: Easing.linear,
    }).start(animation => {
      this.setState({
        translateValue: new Animated.Value(0),
        sign: !this.state.sign,
      });
    });
  };

  render() {
    let spin = this.state.translateValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });

    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            LayoutAnimation.linear();
            this.animatePlus();
            this.setState({expanded: !this.state.expanded});
          }}
          style={styles.animateTitle}>
          <View style={{flexDirection: 'row'}}>
            <Animated.Text
              style={[
                {transform: [{rotate: spin}], height: 20, width: 10},
                styles.animatedSign,
              ]}>
              {this.state.sign ? '+' : '-'}
            </Animated.Text>
            <Text style={styles.title}>{this.props.conduct.title}</Text>
          </View>
        </TouchableOpacity>
        {this.state.expanded ? (
          <Text style={styles.text}>{this.props.conduct.description}</Text>
        ) : null}
      </View>
    );
  }
}

CodeOfConducts.protoTypes = {
  conduct: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
};
