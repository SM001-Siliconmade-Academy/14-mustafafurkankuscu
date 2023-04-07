import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


const TLBakiye = () => {
    return (
        <View style={styles.tlbakiyecontainer}>
            <View>
                <Image style={{ width: 330, height: 210, marginTop: 20,marginBottom:15 }} source={require('../img/kredikartı.png')} />

                <View style={styles.tlbakiyetextcontainer}>
                    <Text style={{ maxWidth: 300, fontSize: 12 }}>Hopipay kart içine kolayca para yükleyerek istediğin her yerde harcama yapabildiğin ücretsiz bir sanal karttır.Bu kartınla;</Text>
                    <View style={styles.tlbakiyeproperty}>
                        <Text><AntDesign name="checkcircle" size={12} color="#00acee" /></Text>
                        <Text style={{ fontSize: 12 }}>Hopi ile anlaşmalı markalarda paranı kat kat harcayabilirsin.</Text>
                    </View>

                    <View style={styles.tlbakiyeproperty}>
                        <Text><AntDesign name="checkcircle" size={12} color="#00acee" /></Text>
                        <Text style={{ fontSize: 12 }}>Arkadaşlarına anında para gönderebilirsin.</Text>
                    </View>

                    <View style={styles.tlbakiyeproperty}>
                        <Text><AntDesign name="checkcircle" size={12} color="#00acee" /></Text>
                        <Text style={{ fontSize: 12 }}>Tüm e-ticaret sitelerinde kolayca alışveriş yapabilirsin</Text>
                    </View>
                </View>
            </View>
            <LinearGradient colors={['#2e9bca', '#27a59e', '#2fb559']}>
                <TouchableOpacity style={styles.tlbakiyebutton}>
                    <Text style={styles.tlbakiyebuttontext}>HOPİPAY KARTINI AKTİVE ET</Text>
                </TouchableOpacity>
            </LinearGradient>

        </View>
    )
}

export default TLBakiye

const styles = StyleSheet.create({
    tlbakiyecontainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        
    },
    tlbakiyeproperty: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: 5
    },
    tlbakiyebutton: {
        //backgroundColor: '#2eb35c',
        width: Dimensions.get('window').width,
        height: 50
    },
    tlbakiyebuttontext: {
        color: '#fff',
        alignSelf: 'center',
        padding: 15,
        fontSize:14,
        fontWeight:500

    },
    tlbakiyetextcontainer:{
        flex:1,
        flexDirection:'column',
        gap:15
        
    }
})