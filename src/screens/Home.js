import { 
         StyleSheet,  
         View, 
         ScrollView, 
         Image, 
         TextInput, 
         TouchableWithoutFeedback, 
         Keyboard } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from "expo-linear-gradient";

import styles from "../constants/styles"


const Home = ({ navigation }) => {
//---------------------------------------------------------
  const data = [
    { title: "Title1", image: require('../../assets/emptyImage.jpg') }, 
    { title: "Title2", image: require('../../assets/emptyImage.jpg') },
    { title: "Title3", image: require('../../assets/emptyImage.jpg') },
    { title: "Title4", image: require('../../assets/emptyImage.jpg') },
    { title: "Title5", image: require('../../assets/emptyImage.jpg') },
  ];
//---------------------------------------------------------

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
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  {data.map((item, index) => (
                    <View key={index} style={styles.titleContainer}>
                      <Image source={item.image} style={styles.image} />
                      {/* <Text style={styles.titleText}>{item.title}</Text> */}
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





            
          </View>
      </SafeAreaView>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};



// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     // backgroundColor: "#ffffff",
//   },
//   mainContainer: {
//     flex: 1,
//     // backgroundColor: "orange",
//     marginBottom: 50,
//     borderColor:"red",
//     borderWidth: 2,
//     width: "95%",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   scrollContainer: {
//     borderWidth: 2,
//     borderColor:"blue",
//     width: "95%",
//     // borderRadius: 10,
//     alignItems: "center",
//     justifyContent: "center",
//     // backgroundColor: "pink",
//     padding: 10,
//   },
//   titleContainer: {
//     marginRight: 20, 
//     alignItems: 'center', 
//   },
//   titleText: {
//     fontSize: 20,
//     padding: 10,
//   },
//   image: {
//     width: 150,
//     height: 150, 
//     resizeMode:"cover",
//   },
//   textInputContainer: {
//     borderWidth:2,
//     borderColor:"blue",
//     width:"95%",
//     alignItems:"center",
//     justifyContent:"center",
//     padding:5,
//     marginVertical:5,
//   },
//   textInputStyle: {
//     borderWidth: 2,
//     width: "95%",
//     borderRadius: 20,
//     textAlign: "center",
//     padding: 5,
//     backgroundColor: "white",
//     borderColor: "gray",
//     fontSize: 16,
//     fontWeight: "bold",
//   },



// });


export default Home;