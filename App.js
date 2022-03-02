import React from 'react';
import {Provider as StoreProvider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';

import store from './src/store';
import {paperTheme, navTheme} from './src/core/theme';

import AppNavigation from './src/navigation';
import {navigationRef} from './src/utils/app_navigation';

const App = () => {
  return (
    <StoreProvider store={store}>
      <PaperProvider theme={paperTheme}>
        <NavigationContainer theme={navTheme} ref={navigationRef}>
          <AppNavigation />
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
  );
};

export default App;
