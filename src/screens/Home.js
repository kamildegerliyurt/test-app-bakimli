import {  
  View, 
  Image, 
  TextInput,
  Text, 
  TouchableWithoutFeedback, 
  Keyboard, 
  TouchableOpacity,
  Dimensions,
} from 'react-native';


import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from "expo-linear-gradient";
import { useState } from 'react';

import styles from "../constants/styles"

import { Rating } from '@rneui/themed';

import Carousel from 'react-native-reanimated-carousel';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


const Home = ({ navigation }) => {
//---------------------------------------------------------
const data = [
  { title: "Title1", image: require('../../assets/men_care_product/man_care_product1.png') }, 
  { title: "Title2", image: require('../../assets/men_care_product/man_care_product2.png') },
  { title: "Title3", image: require('../../assets/men_care_product/man_care_product3.png') },
  ];

//-----------------------------------------Rating
const [rating, setRating] = useState(0);

const ratingCompleted = (newRating) => {
console.log('Rating is: ' + newRating);
setRating(newRating);
};
//-----------------------------------------
const width = Dimensions.get('window').width;
//-----------------------------------------
return (
<KeyboardAwareScrollView style={{flex:1,}} contentContainerStyle={{flexGrow: 1,}}>
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <LinearGradient style={{ flex: 1 }} 
                    colors={["#FFEFBA", "#FFF5BA", "#FFF5BA", "#FFF5BA", "#FFEFBA"]}  
                    start={{ x: 0, y: 1 }} 
                    end={{ x: 1, y: 0 }}>
      
            <SafeAreaView style={styles.safeArea}>
              <View style={styles.mainContainer}>


                  {/* Carousel */}
                  <View style={{ flex: 2, backgroundColor:"orange", borderRadius:20, width: "95%", alignItems: 'center', justifyContent:"center" }}>
                      <Carousel 
                        loop
                        style={{width:340, borderRadius:20, alignItems:"center", justifyContent:"center"}}
                        width={width * 0.8} 
                        height={(width * 0.8) / 2} 
                        autoPlay={true}
                        data={data}
                        scrollAnimationDuration={2000}
                        // onSnapToItem={(index) => console.log('current index:', index)}
                        renderItem={({ item }) => (
                          <View>
                            <Image source={item.image} style={{width:250, height:200, resizeMode:"contain",}} />
                            {/* <Text style={styles.carouselText}>{item.title}</Text> */}
                          </View>
                        )}
                      />
                  </View>

                  {/* TextInput */}
                  <View style={styles.textInputContainer}>
                    <TextInput style={styles.textInputStyle}
                              placeholder='Search...'
                              placeholderTextColor={"gray"}
                              />
                  </View>

                  {/* Carts */}
                  <View style={styles.cartsMainContainer}>

                    <TouchableOpacity style={styles.cartsContainer} onPress={()=> navigation.navigate("Carts")}>  
                      <View style={styles.cartTopContainer}>
                        <Image source={require("../../assets/profilePicture.png")}
                              style={{width:75, height:75, resizeMode:"center"}}/>
                      </View> 

                      <View style={styles.cartDownContainer}>
                        <Text style={styles.cartDownTextStyle}>
                          <Text style={{ fontWeight: 'bold', color: 'black' }}>Name:</Text> Müşteri
                        </Text>
                        <Text style={styles.cartDownTextStyle}>
                          <Text style={{ fontWeight: 'bold', color: 'black' }}>Surname:</Text> Müşteri
                        </Text>
                        <Text style={styles.cartDownTextStyle} numberOfLines={2} ellipsizeMode='tail'>
                          <Text style={{ fontWeight: 'bold', color: 'black' }}>Description:</Text> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </Text>
                        
                        <Rating showRating
                                type="star"
                                fractions={1}
                                imageSize={10}
                                startingValue={rating}
                                onFinishRating={ratingCompleted}/>
                      </View> 
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.cartsContainer} onPress={()=> navigation.navigate("Carts")}>  
                      <View style={styles.cartTopContainer}>
                        <Image source={require("../../assets/profilePicture.png")}
                              style={{width:75, height:75, resizeMode:"center"}}/>
                      </View> 

                      <View style={styles.cartDownContainer}>
                        <Text style={styles.cartDownTextStyle}>
                          <Text style={{ fontWeight: 'bold', color: 'dark' }}>Name:</Text> İşletme
                        </Text>
                        <Text style={styles.cartDownTextStyle}>
                          <Text style={{ fontWeight: 'bold', color: 'black' }}>Surname:</Text> İşletme
                        </Text>
                        <Text style={styles.cartDownTextStyle} numberOfLines={2} ellipsizeMode='tail'>
                          <Text style={{ fontWeight: 'bold', color: 'black' }}>Description:</Text> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </Text>
                        
                        <Rating showRating
                                type="star"
                                fractions={1}
                                imageSize={10}
                                startingValue={rating}
                                onFinishRating={ratingCompleted}/>
                      </View> 
                    </TouchableOpacity>

                  </View>
                
              </View>

            </SafeAreaView>
      </LinearGradient>
  </TouchableWithoutFeedback>
  </KeyboardAwareScrollView>

);
};

export default Home;
