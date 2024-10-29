Hello guys



npm install @reduxjs/toolkit react-redux @react-navigation/native @react-navigation/native-stack react-native-screens react-native-safe-area-context @react-navigation/bottom-tabs @react-native-async-storage/async-storage

//-------------------------------------------- LinearGradient
npx expo install expo-linear-gradient
//-------------------------------------------- Video Play (It works)
npx expo install expo-av

#DOCUMENTATION 
https://www.youtube.com/watch?v=2qCmRJz3NOE

//--------------------------------------------Google Map
npx expo install react-native-maps
//--------------------------------------------Calendar
npm i react-native-calendars
//--------------------------------------------
npm install react-native-reanimated-carousel
npm i react-native-snap-carousel



npm install @rneui/themed
npx expo install react-native-reanimated (Buna plugin falanda eklenecek buna bak aşşa linkten)
                                           https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started/

npx expo install expo-font  (Buna plugin falanda eklenecek ona "expo font" yaz bak)
npm install lottie-react-native



-------------------------------------------------- Test Operating


import { StyleSheet, Text, View, Pressable, Linking, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { LinearGradient } from "expo-linear-gradient";
import styles from "../constants/styles"

const TestOperating = ({ navigation }) => {
  return (
    <LinearGradient 
    style={{ flex: 1 }} 
    colors={["#FFEFBA", "#FFF5BA", "#FFF5BA", "#FFF5BA", "#FFEFBA"]}  
    start={{ x: 0, y: 1 }} 
    end={{ x: 1, y: 0 }}
  >


      <SafeAreaView style={styles.textOperatingContainer}>

          <View style={styles.textOperatingTopContainer}>
            <TouchableOpacity onPress={() => 
                          Linking.openURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')}>
              <Text style={styles.goText}>VİDEO</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.textOperatingDownContainer}>
              <View style={styles.imageContainer}>
                <Image source={require('../../assets/emptyImage.jpg')} style={styles.imageStyle} />
                <Image source={require('../../assets/emptyImage.jpg')} style={styles.imageStyle} />
              </View>

              <View style={styles.imageContainer}>
                <Image source={require('../../assets/emptyImage.jpg')} style={styles.imageStyle} />
                <Image source={require('../../assets/emptyImage.jpg')} style={styles.imageStyle} />
              </View>

              {/* Buton Ekleme */}
              <View style={styles.buttonTopContainer}>
                <TouchableOpacity style={styles.button} 
                                  // onPress={()=> navigation.navigate("Appoinment")}
                                  >
                  <Text style={styles.buttonText}>RANDEVU AL</Text>
                </TouchableOpacity>
              </View>
          </View>

      </SafeAreaView>
    </LinearGradient>
  );
};

export default TestOperating;



--------------------------------------------------

npm i react-native-reanimated-carousel





