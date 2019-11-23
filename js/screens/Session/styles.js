import {StyleSheet} from 'react-native';
import {typography} from '../../config/styles';

const {fontMain, fontMainLight} = typography;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  faveContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  location: {
    fontFamily: fontMain,
    fontSize: 14,
    color: '#999999',
  },
  title: {
    fontFamily: fontMain,
    fontSize: 28,
    ...Platform.select({
      android: {
        color: '#5a5a5a',
      },
    }),
    marginBottom: 15,
  },
  time: {
    color: '#cf392a',
    fontFamily: fontMain,
    marginBottom: 15,
    fontSize: 16,
  },
  text: {
    fontFamily: fontMainLight,
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 15,
  },
  presentedBy: {
    fontFamily: fontMain,
    fontSize: 14,
    color: '#999999',
    marginBottom: 10,
    marginTop: 10,
  },
  speakerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  image: {
    resizeMode: 'contain',
    height: 60,
    width: 60,
    ...Platform.select({
      ios: {
        borderRadius: 30,
      },
      android: {
        borderRadius: 100,
      },
    }),
    borderRadius: 50,
  },
  speakerName: {
    fontFamily: fontMain,
    marginLeft: 10,
    fontSize: 16,
  },
  devider: {
    marginTop: 20,
    marginBottom: 15,
    borderWidth: 0.5,
    borderBottomColor: '#e6e6e6',
  },
  addFaveContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    overflow: 'hidden',
    borderRadius: 20,
    height: 40,
    width: 200,
  },
  button: {
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontFamily: fontMain,
    fontSize: 16,
  },
});
export default styles;
