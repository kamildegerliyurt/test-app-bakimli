import React, { useState, useEffect } from 'react';
import { 
        StyleSheet,
        View, 
        Text, 
        TextInput, 
        TouchableOpacity,  
        TouchableWithoutFeedback, 
        Keyboard } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { login, loadUserData } from '../redux/userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from "expo-linear-gradient";

import styles from "../constants/styles"

const LoginScreen = ({ navigation }) => {
//-------------------------------------------------
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
//-------------------------------------------------
  const dispatch = useDispatch();
  const { isAuth, errorMessage } = useSelector((state) => state.user);
//-------------------------------------------------
  useEffect(() => {
    dispatch(loadUserData());
  }, [dispatch]);
//-------------------------------------------------
  const handleLogin = () => {
    dispatch(login({ email, password }));
  };
//-------------------------------------------------
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

      <LinearGradient 
        style={{ flex: 1 }} 
        colors={["#FFEFBA", "#FFF5BA", "#FFF5BA", "#FFF5BA", "#FFEFBA"]}  
        start={{ x: 0, y: 1 }} 
        end={{ x: 1, y: 0 }}
      >


      <SafeAreaView style={styles.loginScreenContainer}>
        <View style={styles.loginTopContainer}>
          <Text style={styles.title}>LOGIN</Text>

          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            value={password}
            secureTextEntry
            onChangeText={setPassword}
            style={styles.input}
          />

          {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}

          <TouchableOpacity onPress={handleLogin} style={styles.handleLoginContainer}>
            <Text style={styles.handleLoginDataText}>LOGIN</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.handleRegisterPage}>
            <Text style={styles.handleRegisterPageText}>Register</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};



export default LoginScreen;
