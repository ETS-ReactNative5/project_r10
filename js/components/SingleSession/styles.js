import {StyleSheet} from 'react-native';
import {typography} from '../../config/styles';
const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  title: {
    fontFamily: typography.fontMain,
    fontSize: 16,
  },
  faveContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  location: {
    fontFamily: typography.fontMain,
    fontSize: 14,
    color: '#999999',
  },
});
export default styles;
