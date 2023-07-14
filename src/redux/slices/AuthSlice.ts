import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type initialStateType = {
  token: string;
  googleToken: string;
};

const initialState: initialStateType = {
  googleToken: '',
  token: '',
};

const AuthSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    SET_TOKEN(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    SET_GOOGLE_TOKEN(state, action: PayloadAction<string>) {
      state.googleToken = action.payload;
    },
  },
});

export const { SET_TOKEN, SET_GOOGLE_TOKEN } = AuthSlice.actions;
export default AuthSlice.reducer;
