import { StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import React from 'react';
import { TextInputPage, Home, Carts, Appointment, Profile, Map, Operating } from "../screens/index";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons, Entypo } from '@expo/vector-icons';

import { COLORS } from '../constants/color';

const Tab = createBottomTabNavigator();

const UserStack = () => {
  return (
    <Tab.Navigator 
       screenOptions={{ headerShown: false, 
                        tabBarShowLabel: false, 
                        tabBarStyle: { 
                                        position: "absolute",
                                        backgroundColor: COLORS.pumpkinOrange,
                                        borderRadius: 30,
                                        marginBottom: 20,
                                        marginHorizontal: 10,                    
                                     }
                      }}>


      <Tab.Screen 
        name='Home' 
        component={Home}
        options={{ tabBarIcon: ({ focused }) => (<AntDesign name="home" 
                                                            size={26} 
                                                            color={focused ? COLORS.black : COLORS.white} />)}}/>


      <Tab.Screen 
        name='TextInputPage' 
        component={TextInputPage}
        options={{ tabBarButton: () => null }} 
      />

      <Tab.Screen 
        name='Carts' 
        component={Carts}
        options={{ tabBarButton: () => null }} 
      />

      <Tab.Screen 
        name='Operating' 
        component={Operating}
        options={{ tabBarButton: () => null }} 
      />
      
      <Tab.Screen 
        name='Appointment' 
        component={Appointment}
        options={{ tabBarIcon: ({ focused }) => (<Ionicons name="calendar" 
                                                           size={24} 
                                                           color={focused ? COLORS.black : COLORS.white} />)}}/>


      <Tab.Screen 
        name='Profile' 
        component={Profile}
        options={{ tabBarIcon: ({ focused }) => (<Ionicons name="person" 
                                                           size={24} 
                                                           color={focused ? COLORS.black : COLORS.white} />)}}/>


      <Tab.Screen 
        name='Map' 
        component={Map}
        options={{ tabBarIcon: ({ focused }) => (<Ionicons name="map" 
                                                           size={24} 
                                                           color={focused ? COLORS.black : COLORS.white} />)}}/>


    </Tab.Navigator>
  );
};

export default UserStack;
