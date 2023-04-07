import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Auth/Login';
import Welcome from '../screens/Welcome';
import BottomTapRouter from './BottomTapRouter';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
         <Stack.Screen
          name="Home"
          component={Login}
          options={
            {
              title: 'Giriş'
            }
          }
        /> 
         <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={
            {
              title: 'Hoş Geldiniz'
            }
          }
        /> 
        <Stack.Screen
          name="BottomTopRouter"
          component={BottomTapRouter}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router

const styles = StyleSheet.create({})