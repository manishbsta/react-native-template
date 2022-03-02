import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../../screens/root_stack/home';

import {ROUTES} from '../../core/constants/routes';
import {HEADER_TITLE_STYLES} from '../../core/constants/ui_config';

const {Screen, Navigator} = createNativeStackNavigator();
const HomeStack = () => {
  return (
    <Navigator
      screenOptions={{
        headerTitleStyle: {
          ...HEADER_TITLE_STYLES,
        },
      }}>
      <Screen
        options={{headerShown: true, title: 'Home'}}
        name={ROUTES.home}
        component={HomeScreen}
      />
    </Navigator>
  );
};

export default HomeStack;
