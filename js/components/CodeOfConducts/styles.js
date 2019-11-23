import {StyleSheet} from 'react-native';
import {typography} from '../../config/styles';
const styles = StyleSheet.create({
  title: {
    color: '#9963ea',
    marginLeft: 10,
    fontFamily: typography.fontMain,
    fontSize: 16,
  },
  text: {
    marginBottom: 15,
    fontSize: 16,
    fontFamily: typography.fontMainLight,
    lineHeight: 22,
  },
  animatedSign: {
    color: '#9963ea',
    fontFamily: typography.fontMain,
    fontSize: 16,
  },
  animateTitle: {
    flexDirection: 'row',
    marginBottom: 20,
  },
});
export default styles;
