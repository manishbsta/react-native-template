import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ROUTES} from '../app/constants/routes';

import AuthStack from './auth_stack';
import RootStack from './root_stack';

const {Screen, Navigator} = createNativeStackNavigator();
const AppNavigation = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name={ROUTES.auth_stack} component={AuthStack} />
      <Screen name={ROUTES.root_stack} component={RootStack} />
    </Navigator>
  );
};

export default AppNavigation;
