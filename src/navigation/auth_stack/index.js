import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ROUTES} from '../../core/constants/routes';

import LoginScreen from '../../screens/auth_stack/LoginScreen';

const {Screen, Navigator} = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name={ROUTES.login} component={LoginScreen} />
    </Navigator>
  );
};

export default RootStack;
