import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';

import Login from '../screens/Login';
import SplashScreen from '../screens/Splash';
import { useAppSelector } from '../store/hooks';
import MainStack from './MainStack';
import { AppStackParams } from './types';

const { Screen, Navigator } = createNativeStackNavigator<AppStackParams>();

const AppNavigation = () => {
  const token = useAppSelector(s => s.auth.token);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        statusBarAnimation: 'slide',
      }}>
      {token ? (
        <Screen
          name='MainStack'
          component={MainStack}
        />
      ) : (
        <Screen
          name='Login'
          component={Login}
        />
      )}
    </Navigator>
  );
};

export default AppNavigation;
