import React from 'react';
import { Text, View, Image, TouchableOpacity, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from "expo-linear-gradient";
import { useSelector } from 'react-redux';

import styles from "../constants/styles"



const Carts = ({navigation}) => {
//---------------------------------------------------
const userData = useSelector(state => state.user.userData); 
//---------------------------------------------------
  return (
    <LinearGradient style={{ flex: 1 }} 
                    colors={["#FFEFBA", "#FFF5BA", "#FFF5BA", "#FFF5BA", "#FFEFBA"]} 
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 0 }}>

      <SafeAreaView style={styles.mainCartContainer}>
        <View style={styles.innerContainer}>

            <View style={styles.profileImageContainer}>
              <Image source={require("../../assets/profilePicture.png")} />
            </View>

            <View style={styles.infoContainer}>
              <Text style={styles.boldText}>Name: {userData?.firstName}</Text>
              <Text style={styles.boldText}>Surname: {userData?.lastName}</Text>
              <Text style={styles.boldText}>Email: {userData?.email}</Text>
              <Text style={styles.boldText}>Phone: {userData?.phone}</Text>
            </View>


            <View style={styles.cartButtonContainer}>
                <TouchableOpacity style={styles.cartsPageButton}
                           onPress={() => navigation.navigate("Operating")}>
                  <Text style={styles.cartsPageButtonText}>RANDEVU AL</Text>
                </TouchableOpacity>
            </View>

        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Carts;