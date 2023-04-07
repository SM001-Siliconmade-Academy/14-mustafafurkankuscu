import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';

const QrKodum = () => {
  return (
    <View style={styles.qrcontainer}>
      <Text style={styles.title}>55 saniye</Text>
      <Text>içinde QR kodun yenileyecek</Text>
     <Image style={{ width: 200, height: 200 }} source={require('../img/qrkod.png')} />
      <Text style={styles.qrnumber}>4507 7627 27 <FontAwesome5 name="copy" size={24} color="black" /></Text>
      <Text style={styles.qrtext}>QR kodu kasada okutarak veya internet alışverişlerinde altındaki kodu yazarak tekliflerden faydalanabilirsin</Text>
      <TouchableOpacity style={styles.qrbutton}>
        <Text style={styles.qrbuttontext}><FontAwesome5 name="camera" size={16} color="white" /></Text>
        <Text style={styles.qrbuttontext}>QR OKUT</Text>
        <Text style={styles.qrbuttontext}><FontAwesome5 name="arrow-up" size={16} color="white" /></Text> 
      </TouchableOpacity>
    </View>
  )
}

export default QrKodum

const styles = StyleSheet.create({
  qrcontainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20

  },
  title: {
    color: 'tomato',
  },
  qrnumber: {
    fontSize: 22,
    fontWeight: 600,
    color: '#808080'
  },
  qrtext: {
    maxWidth: 250,
    textAlign: 'center'
  },
  qrbutton: {
    backgroundColor: '#00acee',
    flexDirection:'row',
    justifyContent:'space-between',
    borderRadius:30
  },
  qrbuttontext: {
    color: '#fff',
    paddingHorizontal:30,
    paddingVertical:10
  }

})