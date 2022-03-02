import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    user: null,
  },
  reducers: {
    storeToken: (state, {payload}) => {
      state.token = payload;
    },

    storeUser: (state, {payload}) => {
      state.user = payload;
    },
  },
});

export const {storeToken, storeUser} = authSlice.actions;

export default authSlice.reducer;
