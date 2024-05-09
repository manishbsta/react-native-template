import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as StoreProvider } from 'react-redux';

import AppNavigation from './src/navigation';
import { store } from './src/store';

const App = () => {
  return (
    <StoreProvider store={store}>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </StoreProvider>
  );
};

export default App;
