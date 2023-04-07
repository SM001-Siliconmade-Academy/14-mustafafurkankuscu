import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MarkalarScreen from '../screens/MarkalarScreen';
import ÜrünlerScreen from '../screens/ÜrünlerScreen';

const Tab = createMaterialTopTabNavigator();

const UrunAramaRouter = () => {
  return (
    <Tab.Navigator>
            <Tab.Screen
                name="Ürünler"
                component={ÜrünlerScreen}
                options={
                    {
                        
                        
                    }
                }
            />
            <Tab.Screen
                name="Markalar"
                component={MarkalarScreen}
                options={
                    {
                        
                    }
                }
            />
            

        </Tab.Navigator>
  )
}

export default UrunAramaRouter
