import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ParacıkBakiye from '../screens/ParacıkBakiye';
import TLBakiye from '../screens/TLBakiye';
import Kartlarım from '../screens/Kartlarım';

const Tab = createMaterialTopTabNavigator();

const CüzdanımRouter = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Paracık Bakiye"
                component={ParacıkBakiye}
                options={
                    {
                        //tabBarShowLabel:false,
                        // tabBarIcon: ()=>{ return <Image style={{width:50,height:32}} source={require('../img/hopi.png')}/> }
                    }
                }
            />
            <Tab.Screen
                name="TL Bakiye"
                component={TLBakiye}
                options={
                    {
                        //tabBarShowLabel:false,
                        // tabBarIcon: ()=>{ return <Image style={{width:50,height:32}} source={require('../img/hopi.png')}/> }
                    }
                }
            />
            <Tab.Screen
                name="Kartlarım"
                component={Kartlarım}
                options={
                    {
                        //tabBarShowLabel:false,
                        // tabBarIcon: ()=>{ return <Image style={{width:50,height:32}} source={require('../img/hopi.png')}/> }
                    }
                }
            />

        </Tab.Navigator>
    )
}

export default CüzdanımRouter

const styles = StyleSheet.create({})