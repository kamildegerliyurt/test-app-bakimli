import React, { useState } from 'react';
import { 
        StyleSheet, 
        Text, 
        View, 
        Image, 
        TextInput, 
        TouchableWithoutFeedback, 
        Keyboard } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { saveUserData } from '../redux/userSlice'; 

import styles from '../constants/styles';

const Profile = ({ navigation }) => {
//-------------------------------------------------
  const dispatch = useDispatch();
//-------------------------------------------------
  const userData = useSelector((state) => state.user.userData); 
//-------------------------------------------------
  const [firstName, setFirstName] = useState(userData?.firstName || '');
  const [lastName, setLastName] = useState(userData?.lastName || '');
  const [password, setPassword] = useState(userData?.password || '');
//-------------------------------------------------
  const handleSave = () => {
    const updatedUserData = {
      ...userData,
      firstName,
      lastName,
      password,
    };
    dispatch(saveUserData(updatedUserData)); 
  };
//-------------------------------------------------


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>


    <LinearGradient style={{ flex: 1 }} 
                    colors={["#FFEFBA", "#FFF5BA", "#FFF5BA", "#FFF5BA", "#FFEFBA"]}  
                    start={{ x: 0, y: 1 }} 
                    end={{ x: 1, y: 0 }}>

      <SafeAreaView style={styles.profileContainer}>


        {/* Back-Profile-Change */}
        <View style={styles.profileTopContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Image source={require("../../assets/backButton.png")}/>
          </TouchableOpacity>

          <Text style={{fontSize:30, fontWeight:"bold"}}>PROFILE</Text>

          <TouchableOpacity onPress={handleSave}>
            <Image source={require("../../assets/saveButton.png")}/>
          </TouchableOpacity>
        </View>


        {/* Pp-Name-Surname-Pw */}
        <View style={styles.profileDownContainer}>
            <Image source={require("../../assets/profilePicture.png")}/>
            <TextInput
              style={styles.usersInputText}
              value={firstName}
              onChangeText={setFirstName}
              placeholder="First Name"
            />
            <TextInput
              style={styles.usersInputText}
              value={lastName}
              onChangeText={setLastName}
              placeholder="Last Name"
            />
            <TextInput
              style={styles.usersInputText}
              value={password}
              onChangeText={setPassword}
              placeholder="Password"
              // secureTextEntry
            />
        </View>




      </SafeAreaView>   
    </LinearGradient>
    </TouchableWithoutFeedback>
  );
}



// const styles = StyleSheet.create({
//   profileContainer: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     marginBottom: 50,
//   },
//   profileTopContainer: {
//     flex: 1,
//     flexDirection: "row",
//     borderWidth: 2,
//     width: "95%",
//     alignItems: "center",
//     justifyContent: "space-between",
//     paddingHorizontal: 5,
//   },
//   profileDownContainer: {
//     flex: 10,
//     alignItems: "center",
//     justifyContent: "center",
//     borderWidth: 2,
//     width: "95%",
//   },
//   usersInputText: {
//     fontSize: 20,
//     fontWeight: "bold",
//     borderBottomWidth: 1,
//     width: '80%',
//     marginVertical: 10,
//     padding: 5,
//   },
// });


export default Profile;