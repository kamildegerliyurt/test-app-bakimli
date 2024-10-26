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

