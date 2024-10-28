import { StyleSheet, Text, View, Pressable, Linking, TouchableOpacity, Image, Button } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';


import { LinearGradient } from "expo-linear-gradient";
import styles from "../constants/styles"


import { Video } from 'expo-av';
import { useState, useCallback, useRef } from 'react';

const TestOperating = ({ navigation }) => {
//--------------------------------------- Video Play
const video = useRef(null);
// const secondVideo = useRef(null);
const [status, setStatus] = useState({});
// const [statusSecondVideo, setStatusSecondVideo] = useState({});
//---------------------------------------



  return (
    <LinearGradient style={{ flex: 1 }} 
                    colors={["#FFEFBA", "#FFF5BA", "#FFF5BA", "#FFF5BA", "#FFEFBA"]}  
                    start={{ x: 0, y: 1 }} 
                    end={{ x: 1, y: 0 }}>


      <SafeAreaView style={styles.textOperatingContainer}>

          {/* Video*/}
          <View style={styles.textOperatingTopContainer}>
            <Video
                  ref={video}
                  style={styles.videoStyle}
                  source={{ uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4" }}
                  // source={require("../../assets/big_buck_bunny.mp4")} //Local video 
                  useNativeControls
                  resizeMode="cover"
                  isLooping
                  onPlaybackStatusUpdate={setStatus}
                />

                      {/* <View style={styles.buttons}>
                          <Button title="Play from 5s" onPress={() => video.current.playFromPositionAsync(5000)} />
                          <Button title={status.isLooping ? "Set to not loop" : "Set to loop"} onPress={() => video.current.setIsLoopingAsync(!status.isLooping)} />
                      </View>   */}
          </View>

          {/*  Horizontal Images Container */}
          <View style={styles.textOperatingDownContainer}>

              {/*  First Image Horizontal */}
              <View style={styles.imageContainer}>
                <Image source={require('../../assets/emptyImage.jpg')} style={styles.imageStyle} />
                <Image source={require('../../assets/emptyImage.jpg')} style={styles.imageStyle} />
              </View>

              {/*  Second Image Horizontal */}
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