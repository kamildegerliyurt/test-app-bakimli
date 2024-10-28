import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from "expo-linear-gradient";
import { useSelector } from 'react-redux';

const Carts = () => {
  const userData = useSelector(state => state.user.userData); // Redux'tan userData'yı al

  return (
    <LinearGradient style={{ flex: 1 }} colors={["#FFEFBA", "#FFF5BA", "#FFF5BA", "#FFF5BA", "#FFEFBA"]} start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }}>
      <SafeAreaView style={{flex:1, alignItems:"center", justifyContent:"center"}}>
        <View style={{flex:1, borderWidth:2, width:"95%", alignItems:"center", justifyContent:"center"}}>
          <View style={{borderWidth:2, width:"95%", alignItems:"center", justifyContent:"center"}}>
            <Image source={require("../../assets/profilePicture.png")} />
          </View>
          <View style={{borderWidth:2, width:"95%", alignItems:"center", justifyContent:"center", marginVertical:10, paddingVertical:10}}>
            <Text style={{fontSize:20, fontWeight:"bold"}}>Name: {userData?.firstName}</Text>
            <Text style={{fontSize:20, fontWeight:"bold"}}>Surname: {userData?.lastName}</Text>
            <Text style={{fontSize:20, fontWeight:"bold"}}>Email: {userData?.email}</Text>
            <Text style={{fontSize:20, fontWeight:"bold"}}>Phone: {userData?.phone}</Text>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Carts;
