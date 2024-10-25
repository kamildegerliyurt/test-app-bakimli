// userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loginUserAPI, registerUserAPI } from '../api';

export const login = createAsyncThunk('user/login', async ({ email, password }) => {
  try {
    const response = await loginUserAPI(email, password);
    const { token, user } = response;
    await AsyncStorage.setItem('userToken', token);
    return { token, user };
  } catch (error) {
    throw error;
  }
});

export const register = createAsyncThunk('user/register', async ({ firstName, lastName, email, password, phone }) => {
  try {
    const response = await registerUserAPI({ firstName, lastName, email, password, phone });
    const { token } = response;
    await AsyncStorage.setItem('userToken', token);
    return token;
  } catch (error) {
    throw error;
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: null,
    user: null,
    isAuth: false,
    errorMessage: null,
    isLoading: false,
  },
  reducers: {
    logout: (state) => {
      state.isAuth = false;
      state.token = null;
      state.user = null;
      AsyncStorage.removeItem('userToken');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuth = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuth = false;
        state.errorMessage = action.error.message;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isAuth = true;
        state.token = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isAuth = false;
        state.errorMessage = action.error.message;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
