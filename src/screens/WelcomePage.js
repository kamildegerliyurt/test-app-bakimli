import { Text,  TouchableOpacity, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from "expo-linear-gradient";

import styles from "../constants/styles"

const WelcomePage = ({ navigation }) => {
  return (
    <LinearGradient style={{ flex: 1 }} 
                    colors={["#FFEFBA", "#FFF5BA", "#FFF5BA", "#FFF5BA", "#FFEFBA"]}  
                    start={{ x: 0, y: 1 }} 
                    end={{ x: 1, y: 0 }}>

      <SafeAreaView style={styles.welcomePageContainer}>



        <View style={styles.WelcomeTopContainer}>

            <TouchableOpacity style={styles.customerButton} 
                              onPress={()=> navigation.navigate("Register")}>
              <Text style={styles.buttonText}>Müşteri</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.customerButton}
                              onPress={()=> navigation.navigate("Register")}
                              >
              <Text style={styles.buttonText}>İşletme</Text>
            </TouchableOpacity>

        </View>



        <View style={styles.welcomeDownContainer}>
          <TouchableOpacity style={styles.testCustomerButton} 
                            onPress={()=> navigation.navigate("TestOperating")}>
                <Text style={styles.testTextButton}>Test İşletme</Text>
          </TouchableOpacity>
        </View>

        
      </SafeAreaView>
    </LinearGradient>
  );
};


export default WelcomePage;

