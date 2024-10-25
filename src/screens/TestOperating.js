import { StyleSheet, Text, View, Pressable, Linking, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const TestOperating = ({ navigation }) => {
  return (
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
          <View style={{
              flex: 1,
              borderWidth: 2,
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              }}>
            <TouchableOpacity style={styles.button} 
                              // onPress={()=> navigation.navigate("Appoinment")}
                              >
              <Text style={styles.buttonText}>RANDEVU AL</Text>
            </TouchableOpacity>
          </View>
        </View>

    </SafeAreaView>
  );
};

export default TestOperating;

const styles = StyleSheet.create({
  textOperatingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DDDBDB',
  },
  textOperatingTopContainer: {
    flex: 1,
    borderWidth: 2,
    borderColor: "red",
    width: '95%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  textOperatingDownContainer: {
    flex: 2,
    borderWidth: 2,
    borderColor: "red",
    width: '95%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  imageContainer: {
    flex: 3, // Her bir imageContainer'ın yüksekliğini eşit yapıyoruz
    borderWidth: 2,
    borderColor: "blue",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around", // Resimleri aralıklı olarak yerleştirir
    flexDirection: 'row', // Resimleri yan yana yerleştirmek için
  },
  imageStyle: {
    width: 150, // Resmin genişliği
    height: 150, // Resmin yüksekliği
    resizeMode: 'contain', // Resmin boyutunu koruyarak ölçeklendirir
  },
  goText: {
    fontSize: 24, // Yazı boyutunu ayarlamak için
    fontWeight: 'bold',
    color: 'black', // Yazı rengini siyah yaptık
  },
  button: {
    backgroundColor: 'gray', // Butonun arka plan rengi
    padding: 10,
    borderRadius: 5, // Kenar yuvarlama
    
  },
  buttonText: {
    color: 'white', // Buton metni rengi
    fontSize: 18,
    fontWeight: 'bold',
  },
});
