import React from 'react';
import {Provider as StoreProvider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';

import store from './src/store';
import {paperTheme, navTheme} from './src/app/theme';

import AppNavigation from './src/navigation';

const App = () => {
  return (
    <StoreProvider store={store}>
      <PaperProvider theme={paperTheme}>
        <NavigationContainer theme={navTheme}>
          <AppNavigation />
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
  );
};

export default App;
