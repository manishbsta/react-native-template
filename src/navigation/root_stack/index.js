import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeStack from './HomeStack';
import SearchStack from './SearchStack';
import SettingsStack from './SettingsStack';

import {ROUTES} from '../../app/constants/routes';

const {Screen, Navigator} = createNativeStackNavigator();
const RootStack = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name={ROUTES.home_stack} component={HomeStack} />
      <Screen name={ROUTES.search_stack} component={SearchStack} />
      <Screen name={ROUTES.settings_stack} component={SettingsStack} />
    </Navigator>
  );
};

export default RootStack;
