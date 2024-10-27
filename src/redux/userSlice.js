import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userData: null,
    isAuth: false,
    errorMessage: null,
  },
  reducers: {
    register: (state, action) => {
      state.userData = action.payload;
      state.errorMessage = null;
    },
    login: (state, action) => {
      if (state.userData?.email === action.payload.email && state.userData?.password === action.payload.password) {
        state.isAuth = true;
        state.errorMessage = null;
      } else {
        state.isAuth = false;
        state.errorMessage = 'Giriş bilgileri hatalı!';
      }
    },
    logout: (state) => {
      state.userData = null;
      state.isAuth = false;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

//-------------------------------------------------
export const loadUserData = () => async (dispatch) => {
  try {
    const userData = await AsyncStorage.getItem('userData');
    if (userData) {
      dispatch(setUserData(JSON.parse(userData)));
    }
  } catch (error) {
    console.error('Failed to load user data:', error);
  }
};

//-------------------------------------------------
export const saveUserData = (userData) => async () => {
  try {
    await AsyncStorage.setItem('userData', JSON.stringify(userData));
  } catch (error) {
    console.error('Failed to save user data:', error);
  }
};

export const { register, login, logout, setUserData } = userSlice.actions;
export default userSlice.reducer;
