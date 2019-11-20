import {createAppContainer} from 'react-navigation';

import NavigationLayout from './NavigationLayout';
import {createStackNavigator} from 'react-navigation-stack';
import SpeakerModal from '../screens/Speaker';

export default createAppContainer(
  createStackNavigator(
    {
      Layout: NavigationLayout,
      Speaker: SpeakerModal,
    },
    {
      headerMode: 'none',
      mode: 'modal',
    },
  ),
);
