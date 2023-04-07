import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Teklifler from '../screens/Teklifler';
import Markalar from '../screens/Markalar';

const Tab = createMaterialTopTabNavigator();

const KategorilerRouter = () => {
  return (
    <Tab.Navigator>
            <Tab.Screen
                name="Teklifler"
                component={Teklifler}
                options={
                    {
                        
                    }
                }
            />
            <Tab.Screen
                name="Markalar"
                component={Markalar}
                options={
                    {
                        
                    }
                }
            />
            

        </Tab.Navigator>
  )
}

export default KategorilerRouter

const styles = StyleSheet.create({})