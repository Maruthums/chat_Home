/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Task1 from './src/screens/task1';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from './src/route/stackNav';

const App=()=>{
  return (
  // <Task1 />
  <NavigationContainer>
        <MainStackNavigator />
     </NavigationContainer>
  );
};



export default App;
