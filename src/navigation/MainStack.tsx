import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import Home from '../screens/Home';
import Settings from '../screens/Settings';
import { MainStackParams } from './types';

const { Screen, Navigator } = createNativeStackNavigator<MainStackParams>();

const MainStack = () => {
  return (
    <Navigator
      screenOptions={{
        animation: 'fade_from_bottom',
      }}>
      <Screen
        name='Home'
        component={Home}
      />
      <Screen
        name='Settings'
        component={Settings}
      />
    </Navigator>
  );
};

export default MainStack;
