import {combineReducers, configureStore, PayloadAction} from '@reduxjs/toolkit';
import {authReducer} from './slices/auth.slice';

const combinedReducer = combineReducers({
  auth: authReducer,
});

const rootReducer = (state: any, action: PayloadAction) => {
  if (action.type === 'auth/logOut') {
    state = undefined;
  }

  return combinedReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
