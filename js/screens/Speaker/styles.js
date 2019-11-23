import {StyleSheet} from 'react-native';
import {typography} from '../../config/styles';
const {fontMain, fontMainLight} = typography;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 75,
  },
  exit: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 18,
    fontFamily: typography.fontMain,
    alignContent: 'flex-start',
    marginLeft: 10,
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 18,
    fontFamily: typography.fontMain,
  },
  image: {
    resizeMode: 'contain',
    height: 150,
    width: 150,
    ...Platform.select({
      ios: {
        borderRadius: 75,
      },
      android: {
        borderRadius: 85,
      },
    }),
    marginTop: 10,
  },
  background: {
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 8,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  name: {
    fontFamily: fontMain,
    fontSize: 30,
    marginTop: 25,
    marginBottom: 25,
  },
  bio: {
    fontFamily: fontMainLight,
    fontSize: 18,
    marginBottom: 20,
    lineHeight: 22,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    overflow: 'hidden',
    borderRadius: 20,
    height: 45,
    width: 250,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontFamily: fontMain,
    fontSize: 16,
  },
});
export default styles;
