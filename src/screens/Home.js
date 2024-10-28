import { 
  StyleSheet,  
  View, 
  ScrollView, 
  Image, 
  TextInput,
  Text, 
  TouchableWithoutFeedback, 
  Keyboard, 
  Pressable,
  Touchable} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from "expo-linear-gradient";
import { useState } from 'react';

import styles from "../constants/styles"

import { Rating, RatingProps } from '@rneui/themed';
import { TouchableOpacity } from 'react-native';

const Home = ({ navigation }) => {
//---------------------------------------------------------
const data = [
{ title: "Title1", image: require('../../assets/emptyImage.jpg') }, 
{ title: "Title2", image: require('../../assets/emptyImage.jpg') },
{ title: "Title3", image: require('../../assets/emptyImage.jpg') },
{ title: "Title4", image: require('../../assets/emptyImage.jpg') },
{ title: "Title5", image: require('../../assets/emptyImage.jpg') },
];

//-----------------------------------------Rating
const [rating, setRating] = useState(0);

const ratingCompleted = (newRating) => {
console.log('Rating is: ' + newRating);
setRating(newRating);
};
//-----------------------------------------

return (
<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
<LinearGradient style={{ flex: 1 }} 
               colors={["#FFEFBA", "#FFF5BA", "#FFF5BA", "#FFF5BA", "#FFEFBA"]}  
               start={{ x: 0, y: 1 }} 
               end={{ x: 1, y: 0 }}>
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.mainContainer}>

          {/* ScrollView */}
          <View style={styles.scrollContainer}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} alwaysBounceHorizontal={false}>
              {data.map((item, index) => (
                <View key={index} style={styles.titleContainer}>
                  <Image source={item.image} style={styles.image} />
                </View>
              ))}
            </ScrollView>
          </View>

          {/* TextInput */}
          <View style={styles.textInputContainer}>
            <TextInput style={styles.textInputStyle}
                      placeholder='Search...'
                      placeholderTextColor={"gray"}/>
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
);
};

export default Home;
