import { createSlice } from '@reduxjs/toolkit';

import { getAsyncActionMutation } from '../utils/getAsyncAction';
import { userApi } from '../../api/userApi/userApi';

const initialState:  {
  login: null | string;
  isAdmin: null | boolean;
  isLoading: boolean,
  error: string | null;
} = {
  login: null,
  isAdmin: null,
  isLoading: false,
  error: null
};

export const signIn = getAsyncActionMutation('login', userApi.signIn);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(signIn.pending, state => {
      state.isLoading = true;
    }).addCase(signIn.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.login = action.payload.login;
      state.isAdmin = action.payload.isAdmin;
    })
      .addCase(signIn.rejected, (state, action) => {
        state.error = action.payload || null;
        state.isLoading = false;
      });
  }
});

export const userReducer = userSlice.reducer;