import { Pressable, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const WelcomePage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.welcomePageContainer}>


      <View style={styles.WelcomeTopContainer}>

          <TouchableOpacity style={styles.customerButton} 
                            onPress={()=> navigation.navigate("Register")}>
            <Text style={styles.buttonText}>Müşteri</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.customerButton}
                            // onPress={()=> navigation.navigate("Register")}
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
  );
};

export default WelcomePage;

const styles = StyleSheet.create({
  welcomePageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DDDBDB',
  },
  WelcomeTopContainer: {
    flex: 1,
    borderWidth: 2,
    width: '95%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    marginVertical: 5,
    // backgroundColor:"darkgray",

  },
  customerButton: {
    borderWidth: 2,
    width: '45%', // Genişliği artırdık
    // height: 150, // Yüksekliği artırdık
    paddingVertical:50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
    borderRadius:20,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white', // Yazı rengini beyaz yaptık
  },
  otherButton: {
    borderWidth: 2,
    width: '35%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeDownContainer: {
    flex: 1,
    borderWidth: 2,
    width: '95%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  testCustomerButton: {
    borderWidth: 2,
    width: '90%', // Genişliği artırdık
    // height: 150, // Yüksekliği artırdık
    paddingVertical:50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
    borderRadius:20,
  },
  testTextButton: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white', // Yazı rengini beyaz yaptık
  },



});
