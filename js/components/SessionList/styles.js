import {StyleSheet} from 'react-native';
import {typography} from '../../config/styles';
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#e6e6e6',
    paddingLeft: 15,
    paddingTop: 4,
    paddingBottom: 4,
    fontFamily: typography.fontMain,
    fontSize: 16,
  },
  itemSeperator: {
    borderWidth: 0.5,
    borderBottomColor: '#e6e6e6',
  },
});
export default styles;
