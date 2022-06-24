import React, { createContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigator from './bottomNav';
import Task1 from '../screens/task1';
const Stack = createNativeStackNavigator();
export default function MainStackNavigator(props) {
    return(
        <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Bottom'}>
        {/* <Stack.Screen name="ShareExample" component={ShareExample} /> */}
        <Stack.Screen name="Bottom" component={BottomNavigator} />
        <Stack.Screen name="Chat" component={Task1} />
        </Stack.Navigator>
    )
}