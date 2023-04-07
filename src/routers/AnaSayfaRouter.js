import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Hopi from '../screens/Hopi';
import HopiShop from '../screens/HopiShop';
import { Image } from 'react-native';

const Tab = createMaterialTopTabNavigator();

const AnaSayfaRouter = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
            name="Hopi"
            component={Hopi}
            options={
                {
                    tabBarShowLabel:false,
                    tabBarIcon: ()=>{ return <Image style={{width:50,height:32}} source={require('../img/hopi-logo.png')}/> }
                }
            }
            />
            <Tab.Screen
            name="HopiShop"
            component={HopiShop}
            options={
                {
                    tabBarShowLabel:false,
                    tabBarIcon:()=>{return <Image style={{width:40,height:40}} source={{uri:'https://digitalreport.com.tr/wp-content/uploads/2022/02/hopishop_logo_720x375_4.jpg'}} />}
                }
            }
            />
        </Tab.Navigator>
    )
}

export default AnaSayfaRouter

const styles = StyleSheet.create({})

