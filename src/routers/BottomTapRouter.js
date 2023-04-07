import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import CüzdanımRouter from './CüzdanımRouter';
import KategorilerRouter from './KategorilerRouter';
import QrKodum from '../screens/QrKodum';
import Hesabım from '../screens/Hesabım';
import AnaSayfaRouter from './AnaSayfaRouter';

const Tab = createBottomTabNavigator();

const Route = () => {
  return (
 
      <Tab.Navigator>
        <Tab.Screen
          name="AnaSayfa"
          component={AnaSayfaRouter}
          options={
            {
              tabBarIcon: () => { return <Ionicons name="home" size={24} color="black" /> }
            }
          }
        />
        <Tab.Screen
          name="Kategoriler"
          component={KategorilerRouter}
          options={
            {
              tabBarIcon: () => { return <Ionicons name="ios-logo-windows" size={24} color="black" /> }
            }
          }
        />
        <Tab.Screen
          name="QrKodum"
          component={QrKodum}
          options={
            {
              headerTitle: 'Hopi QR Kodum',
              tabBarIcon: () => { return <Ionicons name="qr-code" size={24} color="black" /> }
            }
          }
        />
        <Tab.Screen
          name="Cüzdanım"
          component={CüzdanımRouter}
          options={
            {
              tabBarIcon: () => { return <Ionicons name="wallet" size={24} color="black" /> }
            }
          }
        />
        <Tab.Screen
          name="Hesabım"
          component={Hesabım}
          options={
            {
              tabBarIcon: () => { return <Ionicons name="person" size={24} color="black" /> }
            }
          }
        />
      </Tab.Navigator>
   
  )
}

export default Route

const styles = StyleSheet.create({})