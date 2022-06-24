import React, { useEffect, useState } from 'react';
import { Image, View, Text, BackHandler, ToastAndroid } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { chat, credit, heart, home } from '../assets/image/index';
import Home from '../screens/home';
import Task1 from '../screens/task1';
import Chat from '../screens/chat';

const Bottomtab = createBottomTabNavigator();
export default function BottomNavigator() {
  return (
    <Bottomtab.Navigator
      tabBarOptions={{
        showLabel: false,
      }}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
            backgroundColor:'#3a8c9d',
            marginHorizontal:30,
            borderRadius:50,
            marginBottom:20,
            height:60
        }
      }}>
      <Bottomtab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor:focused?'#fff': '#3a8c9d',
                borderRadius:50,
                height:45,
                width:45
              }}>
              <Image
                source={home}
                style={{
                  tintColor: focused ? '#3a8c9d' : '#fff',
                  width: 23,
                  height: 23,
                  opacity: 1,
                  resizeMode: 'stretch',
                }}
              />
              {!focused && 
              <Text
                style={{
                  color: focused ? '#705af1' : '#fff',
                  fontSize: 12,
                  marginTop: 3,
                }}>
                Home
              </Text>
              }
            </View>
          ),
        }}
      />
      <Bottomtab.Screen
        name="credit"
        component={Chat}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor:focused?'#fff': '#3a8c9d',
                borderRadius:50,
                height:45,
                width:45
              }}>
              <Image
                source={credit}
                style={{
                  tintColor: focused ? '#705af1' : '#fff',
                  width: 23,
                  height: 23,
                  opacity: 1,
                  resizeMode: 'stretch',
                }}
              />
               {!focused &&  <Text
                style={{
                  color: focused ? '#705af1' : '#fff',
                  fontFamily: 'NexaBold',
                  fontSize: 12,
                  marginTop: 3,
                }}>
                Credit
              </Text>
        }
            </View>
          ),
        }}
      />
      <Bottomtab.Screen
        name="fav"
        component={Chat}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor:focused?'#fff': '#3a8c9d',
                borderRadius:50,
                height:45,
                width:45
              }}>
              <Image
                source={heart}
                style={{
                  tintColor: focused ? '#705af1' : '#fff',
                  width: 23,
                  height: 23,
                  opacity: 1,
                  resizeMode: 'stretch',
                }}
              />
                {!focused && <Text
                style={{
                  color: focused ? '#705af1' : '#fff',
                  fontFamily: 'NexaBold',
                  fontSize: 12,
                  marginTop: 3,
                }}>
                Favorite
              </Text>
        }
            </View>
          ),
        }}
      />
      <Bottomtab.Screen
        name="chat"
        component={Chat}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor:focused?'#fff': '#3a8c9d',
                borderRadius:50,
                height:45,
                width:45
              }}>
              <Image
                source={chat}
                style={{
                  tintColor: focused ? '#705af1' : '#fff',
                  width: 23,
                  height: 23,
                  opacity: 1,
                  resizeMode: 'stretch',
                }}
              />
               {!focused &&  <Text
                style={{
                  color: focused ? '#705af1' : '#fff',
                  fontFamily: 'NexaBold',
                  fontSize: 12,
                  marginTop: 3,
                }}>
                Chat
              </Text>
        }
            </View>
          ),
        }}
      />
    </Bottomtab.Navigator>
  );
}
