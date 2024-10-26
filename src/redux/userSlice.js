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
      // Otomatik giriş yapmamak için bu satırı kaldırdık
      // state.isAuth = true; 
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

// AsyncStorage'dan kullanıcı verilerini yükle
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

export const { register, login, logout, setUserData } = userSlice.actions;
export default userSlice.reducer;
