import { Text, View, ScrollView, RefreshControl, TouchableOpacity } from 'react-native';
import React, { useState, useCallback, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from '../constants/styles';


const Appointment = ({ route, navigation }) => {
//----------------------------------------
const [dates, setDates] = useState([]);
const [refreshing, setRefreshing] = useState(false); 
//----------------------------------------
useEffect(() => {
  const loadDates = async () => {
  const storedDates = await AsyncStorage.getItem('dates');
    if (storedDates) {
      setDates(JSON.parse(storedDates));
    }
  };
  loadDates();
}, []);
//----------------------------------------
const handleDelete = async (dateToDelete) => {
  const updatedDates = dates.filter(date => date !== dateToDelete);
    setDates(updatedDates);
  await AsyncStorage.setItem('dates', JSON.stringify(updatedDates)); 
};
//----------------------------------------
const onRefresh = useCallback(() => {
  setRefreshing(true);
  setTimeout(async () => {
    const storedDates = await AsyncStorage.getItem('dates');
    setDates(storedDates ? JSON.parse(storedDates) : []);
    setRefreshing(false);
  }, 2000);
}, []);
//----------------------------------------
  return (
    <LinearGradient style={{ flex: 1 }} 
                    colors={["#FFEFBA", "#FFF5BA", "#FFF5BA", "#FFF5BA", "#FFEFBA"]}  
                    start={{ x: 0, y: 1 }} 
                    end={{ x: 1, y: 0 }}>

      <SafeAreaView style={styles.appointmentMainContainer}>
        <Text style={styles.appointmentMainText}>Randevular</Text>
        
        {/* Select dates */}
        <ScrollView style={{ width: "100%", padding: 20 }} 
                    refreshControl={
                     <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>

          {dates.length > 0 ? (
            dates.map((date, index) => (
              <View key={index} style={styles.dateContainer}>
                <Text style={styles.dateText}>{date}</Text>
                <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(date)}>
                  <Text style={styles.deleteButtonText}>Sil</Text>
                </TouchableOpacity>
              </View>
            ))
          ) : (
            <Text style={{textAlign:"center",}}>Henüz bir tarih seçilmedi.</Text>
          )}
        </ScrollView>

      </SafeAreaView>
    </LinearGradient>
  );
};


export default Appointment;
