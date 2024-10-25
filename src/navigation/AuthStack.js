import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LoginScreen, Register, WelcomePage, Operating, TestOperating, } from '../screens/index';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()


const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>

        <Stack.Screen name='WelcomePage' component={WelcomePage}/>
        <Stack.Screen name='Operating' component={Operating}/>
        <Stack.Screen name='TestOperating' component={TestOperating}/>
        <Stack.Screen name='LoginScreen' component={LoginScreen}/>
        <Stack.Screen name='Register' component={Register}/>

    </Stack.Navigator>
  )
}

export default AuthStack

const styles = StyleSheet.create({})