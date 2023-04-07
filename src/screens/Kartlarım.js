import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';

const Kartlarım = () => {
  return (
    <View style={styles.kartlarımcontainer}>
      <View style={styles.kartlarımcontainer1}>
        <Image style={{ width: 300, height: 200,marginTop:15,marginLeft:15}} source={require('../img/paracık.png')} />
        <Text style={{ fontSize: 16, fontWeight: 500, color: '#494949' }}>Kredi / Banka Kartlarım</Text>
        <Text style={{ fontSize: 10, fontWeight: 400, color: '#000' }}>Masterpass'e kartlarını kaydet,alışverişlerini Hopi mobil ödeme ile kolayca yap</Text>
        <TouchableOpacity style={styles.kartlarımbutton}>
          <Text style={styles.kartlarımbuttontext}><FontAwesome name="cc-mastercard" size={24} color="#67abc2" /></Text>
          <Text style={styles.kartlarımbuttontext}>Masterpass Hesabını İlişkilendir</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 16, fontWeight: 500, color: '#494949' }}>Ulaşım Kartlarım</Text>
        <Text style={{ fontSize: 10, fontWeight: 400, color: '#000' }}>İstanbulkart'ını kaydederek kartlarına Paracık ile yükleme yapabilirsin</Text>
        <TouchableOpacity style={styles.kartlarımbutton}>
          <Text style={styles.kartlarımbuttontext}><FontAwesome name="credit-card" size={24} color="#67abc2" /></Text>
          <Text style={styles.kartlarımbuttontext}>İstanbulkart Ekle</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Kartlarım

const styles = StyleSheet.create({
  kartlarımcontainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  kartlarımcontainer1:{
    paddingHorizontal:30,
    gap:15
  },
  kartlarımbutton:{
    backgroundColor:'transparent',
    flexDirection:'row',
    justifyContent:'space-around',
    borderRadius:20,
    borderColor:'#67abc2',
    borderWidth:4,
    borderStyle:'dotted'

  },
  kartlarımbuttontext:{
    color:'#67abc2',
    paddingVertical:20
  }
})