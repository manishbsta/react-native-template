import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {MainStackParams} from './_types';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';

const {Screen, Navigator} = createNativeStackNavigator<MainStackParams>();
const MainStack = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        animation: 'fade_from_bottom',
      }}>
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Settings" component={SettingsScreen} />
    </Navigator>
  );
};

export default MainStack;
