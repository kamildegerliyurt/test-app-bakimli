import { StyleSheet } from 'react-native';
import React from 'react';
import { TextInputPage, Home, Carts, Appointment, Profile, Map } from "../screens/index";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons, Entypo } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const UserStack = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarStyle: { backgroundColor: '#3E2565' } }}>
      <Tab.Screen 
        name='Home' 
        component={Home}
        options={{ tabBarIcon: ({ focused }) => (<AntDesign name="home" size={24} color={focused ? "tomato" : "white"} />) }}
      />
      <Tab.Screen 
        name='TextInputPage' 
        component={TextInputPage}
        options={{ tabBarButton: () => null }} 
      />
      <Tab.Screen 
        name='Carts' 
        component={Carts}
        options={{ tabBarIcon: ({ focused }) => (<Entypo name="shopping-cart" size={24} color={focused ? "tomato" : "white"} />) }}
      />
      <Tab.Screen 
        name='Appointment' 
        component={Appointment}
        options={{ tabBarIcon: ({ focused }) => (<Ionicons name="calendar" size={24} color={focused ? "tomato" : "white"} />) }}
      />
      <Tab.Screen 
        name='Profile' 
        component={Profile}
        options={{ tabBarIcon: ({ focused }) => (<Ionicons name="person" size={24} color={focused ? "tomato" : "white"} />) }}
      />
      <Tab.Screen 
        name='Map' 
        component={Map}
        options={{ tabBarIcon: ({ focused }) => (<Ionicons name="map" size={24} color={focused ? "tomato" : "white"} />) }}
      />
    </Tab.Navigator>
  );
};

export default UserStack;
