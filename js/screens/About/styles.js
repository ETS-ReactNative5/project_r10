import {StyleSheet} from 'react-native';
import {typography} from '../../config/styles';
const styles = StyleSheet.create({
  headerView: {
    height: 100,
    borderBottomWidth: 0.5,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  openingTitle: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
    fontFamily: 'Montserrat-Regular',
  },
  bodyText: {
    fontSize: 14,
    // lineHeight: 3,
    fontFamily: 'Montserrat-Light',
    marginBottom: 20,
    marginVertical: 20,
  },
  descriptionTitle: {
    color: '#C8A2C8',
    marginBottom: 20,
  },
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
});

export default styles;
