// Register.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useDispatch } from 'react-redux';
import { register } from '../redux/userSlice';
import { SafeAreaView } from 'react-native-safe-area-context';

const Register = ({navigation}) => {
//-------------------------------------------
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
  });
  //-------------------------------------------
  const dispatch = useDispatch();
  //-------------------------------------------
  const handleRegister = () => {
    dispatch(register(formData));
  };
  //-------------------------------------------

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>


        <SafeAreaView style={styles.registerContainer}>



          <View style={styles.registerTopContainer}>

                <Text style={{fontSize:35, fontWeight:"bold",}}>REGİSTER</Text>

                <TextInput placeholder="First Name"
                          placeholderTextColor={"gray"}
                          value={formData.firstName}
                          onChangeText={(text) => setFormData({ ...formData, firstName: text })}
                          style={styles.input}/>

                <TextInput placeholder="Last Name"
                          placeholderTextColor={"gray"}
                          value={formData.lastName}
                          onChangeText={(text) => setFormData({ ...formData, lastName: text })}
                          style={styles.input}/>

                <TextInput placeholder="Email"
                          placeholderTextColor={"gray"}
                          value={formData.email}
                          onChangeText={(text) => setFormData({ ...formData, email: text })}
                          style={styles.input}/>

                <TextInput placeholder="Password"
                          value={formData.password}
                          secureTextEntry
                          onChangeText={(text) => setFormData({ ...formData, password: text })}
                          style={styles.input}/>

                <TextInput placeholder="Phone"
                          value={formData.phone}
                          onChangeText={(text) => setFormData({ ...formData, phone: text })}
                          style={styles.input}/>




                <TouchableOpacity onPress={handleRegister}
                                  style={styles.handleRegisterContainer}>
                   <Text style={styles.handleRegisterText}>REGISTER</Text>
                </TouchableOpacity>



                
                <TouchableOpacity onPress={()=> navigation.navigate("LoginScreen")}
                                  style={styles.handleLogin}>
                   <Text style={styles.handleLoginText}>Login</Text>
                </TouchableOpacity>


            


          </View>

        
        </SafeAreaView>


    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  registerContainer: {
    flex: 1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#DDDBDB",
   
  },
  registerTopContainer:{
    flex:1,
    borderWidth:2,
    width:"95%",
    alignItems:"center",
    justifyContent:"center",
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
  handleRegisterContainer: {
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
  handleRegisterText: {
    fontSize:18,
    fontWeight:"bold",
    color:"black",
  },
  handleLogin: {
    alignItems:"center",
    justifyContent:"center",
    // borderWidth:2,
    padding:5,
    // marginTop:5,
    
  },
  handleLoginText: {
    fontSize:16,
    textDecorationLine:'underline',
  }



});

export default Register;
