import {Text, TouchableOpacity, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from "expo-linear-gradient";
import { Calendar } from 'react-native-calendars';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from '../constants/styles';


const Operating = ({ navigation }) => {
//----------------------------------------
const [selectedDate, setSelectedDate] = useState(null);
const [dates, setDates] = useState([]); 
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
  const handleDayPress = (day) => {
    setSelectedDate(prevDate => prevDate === day.dateString ? null : day.dateString);
  };
  //----------------------------------------
  const handleAddPress = async () => {
    if (selectedDate) {
      const updatedDates = [...dates, selectedDate];
      setDates(updatedDates);
      await AsyncStorage.setItem('dates', JSON.stringify(updatedDates)); 
      navigation.navigate('Appointment', { dates: updatedDates }); 
    }
  };
    //----------------------------------------

  return (
    <LinearGradient style={{ flex: 1 }} 
                    colors={["#FFEFBA", "#FFF5BA", "#FFF5BA", "#FFF5BA", "#FFEFBA"]}  
                    start={{ x: 0, y: 1 }} 
                    end={{ x: 1, y: 0 }}>

      <SafeAreaView style={styles.operatingMainContainer}>
        <View style={styles.operatingOtherContainer}>

          {/* Header */}
            <View style={styles.headerContainer}>
              <Text style={{ fontSize: 25, fontWeight: "bold" }}>RANDEVU AL</Text>
            </View>

          {/* Calendar */}
            <View style={styles.calendarContainer}>
              <Calendar style={{ flex: 1, width: "100%" }}
                        enableSwipeMonths
                        onDayPress={handleDayPress}
                        markingType={'single'}
                        markedDates={selectedDate ? { [selectedDate]: { selected: true, marked: true } } : {}}
                        theme={{
                          calendarBackground: "transparent",
                          monthTextColor: "black",
                          textMonthFontSize: 30,
                          textDayFontWeight: "bold",
                          arrowColor: "black",
                          dayTextColor: "red",
                          textInactiveColor: "green",
                          textSectionTitleColor: "black",
                          textDayFontWeight: "bold",
                          textDisabledColor: "green",
                        }}
                      />
            </View>

          {/* Calendar Results*/}
            <View style={styles.footerContainer}>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                {selectedDate ? `Seçilen Tarih: ${selectedDate}` : "Bir tarih seçin"}
              </Text>
              <TouchableOpacity style={styles.addButton}
                         onPress={handleAddPress}
                         disabled={!selectedDate}>

                <Text style={{ color: '#FFF', fontWeight: 'bold' }}>Ekle</Text>
              </TouchableOpacity>
            </View>


        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Operating;
