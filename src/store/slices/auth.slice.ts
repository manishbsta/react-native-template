import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { mmkv } from '../../utils/mmkv';
import { AuthState } from './types';
import { KEYS } from '../../core/constants/storage-keys';

const initialState: AuthState = {
  token: undefined,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      mmkv.set(KEYS.accessToken, action.payload);
    },

    logOut: () => {
      mmkv.clearAll();
      mmkv.set('firstVisit', false);
    },
  },
});

export const { setToken, logOut } = authSlice.actions;

export const authReducer = authSlice.reducer;
