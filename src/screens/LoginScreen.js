// LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/userSlice';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { isAuth, errorMessage } = useSelector((state) => state.user);

  const handleLogin = () => {
    dispatch(login({ email, password }));
  };

  // Eğer kullanıcı başarılı şekilde giriş yaparsa UserStack'e yönlendir
  if (isAuth) {
    navigation.reset({
      index: 0,
      routes: [{ name: 'UserStack' }],
    });
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>


      <SafeAreaView style={styles.loginScreenContainer}>

        <View style={styles.loginTopContainer}>

            <Text style={{fontSize:35, fontWeight:"bold",}}>LOGIN</Text>

            <TextInput placeholder="Email"
                      placeholderTextColor={"gray"}
                      value={email}
                      onChangeText={(text) => setEmail(text)}
                      style={styles.input}/>

            <TextInput placeholder="Password"
                      placeholderTextColor={"gray"}
                      value={password}
                      secureTextEntry
                      onChangeText={(text) => setPassword(text)}
                      style={styles.input}/>

              {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}

            {/* <Button title="Login" onPress={handleLogin} /> */}


            <TouchableOpacity onPress={handleLogin}
                              style={styles.handleLoginContainer}>
                    <Text style={styles.handleLoginText}>LOGIN</Text>
            </TouchableOpacity>



                  
                  <TouchableOpacity onPress={()=> navigation.navigate("Register")}
                                    style={styles.handleLogin}>
                    <Text style={styles.handleRegisterPageText}>Register</Text>
                  </TouchableOpacity>


        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  loginScreenContainer: {
    flex: 1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#DDDBDB",
  },
  input: {
    borderWidth:2, 
    width:"95%", 
    borderRadius:20,
    textAlign:"center",
    padding:5,
    backgroundColor:"white",
    borderColor:"gray",
    fontSize:16,
    fontWeight:"bold",
    marginTop:5,
  },
  error: {
    color: 'red',
    marginBottom: 8,
  },
  loginTopContainer:{
    flex:1,
    borderWidth:2,
    width:"95%",
    alignItems:"center",
    justifyContent:"center",
  },
  handleLoginContainer:{
    borderWidth:2,
    borderColor:"gray",
    width:"60%",
    alignItems:"center",
    justifyContent:"center",
    padding:10,
    marginTop:10,
    borderRadius:20,
    backgroundColor:"gray",
  },
  handleLoginText: {
    fontSize:18,
    fontWeight:"bold",
    color:"black",
  },
  handleRegisterPageText:{
    fontSize:16,
    textDecorationLine:'underline',
  }



});

export default LoginScreen;
