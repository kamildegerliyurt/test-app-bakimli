import React, { useState } from 'react';
import { View, 
         Text, 
         TextInput, 
         TouchableOpacity, 
         TouchableWithoutFeedback, 
         Keyboard,
        } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch } from 'react-redux';
import { register } from '../redux/userSlice';
import styles from "../constants/styles";



const Register = ({ navigation }) => {
//--------------------------------------------
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
  });
//--------------------------------------------
  const handleRegister = async () => {
    dispatch(register(formData));
    await AsyncStorage.setItem('userData', JSON.stringify(formData)); 
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phone: '',
    });
    alert('Kayıt başarıyla tamamlandı!');
  };
//--------------------------------------------

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <LinearGradient style={{ flex: 1 }} 
                      colors={["#FFEFBA", "#FFF5BA", "#FFF5BA", "#FFF5BA", "#FFEFBA"]} 
                      start={{ x: 0, y: 1 }} 
                      end={{ x: 1, y: 0 }}>

        <SafeAreaView style={styles.registerContainer}>


            <View style={styles.registerTopContainer}>

                <Text style={styles.title}>REGISTER</Text>
                
                <TextInput placeholder="First Name" 
                          value={formData.firstName} 
                          onChangeText={(text) => setFormData({ ...formData, firstName: text })} 
                          style={styles.input} />

                <TextInput placeholder="Last Name" 
                          value={formData.lastName} 
                          onChangeText={(text) => setFormData({ ...formData, lastName: text })} 
                          style={styles.input} />

                <TextInput placeholder="Email" 
                          value={formData.email} 
                          onChangeText={(text) => setFormData({ ...formData, email: text })} 
                          style={styles.input} />


                <TextInput placeholder="Password" 
                          secureTextEntry 
                          value={formData.password} 
                          onChangeText={(text) => setFormData({ ...formData, password: text })} 
                          style={styles.input} />

                <TextInput placeholder="Phone" 
                          value={formData.phone} 
                          onChangeText={(text) => setFormData({ ...formData, phone: text })} 
                          style={styles.input} />

                <TouchableOpacity onPress={handleRegister} 
                                  style={styles.handleRegisterContainer}>
                  <Text style={styles.handleRegisterText}>REGISTER</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
                  <Text style={styles.handleLoginText}>Login</Text>
                </TouchableOpacity>

            </View>


        </SafeAreaView>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};

export default Register;
