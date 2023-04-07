import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const ParacıkBakiye = () => {
  return (
    <View style={styles.paracıkbakiyecontainer}>
      <Text style={styles.paracıkbakiyesubtitle}>TOPLAM PARACIK</Text>
      <Text style={styles.paracıkbakiyetitle}>201,50</Text>
      <View style={styles.paracıkbakiyeinfo}>
        <View style={styles.paracıkbakiyeinfomoney}>
          <Text style={{ fontSize: 18, fontWeight: 700 }}>1,50</Text>
          <Text style={{ fontSize: 10, fontWeight: 500 }}>PARACIK</Text>
        </View>
        
        <View style={styles.paracıkbakiyeinfomoney2}>
          <Text style={{ fontSize: 18, fontWeight: 700, color: '#bebebe' }}>200,00</Text>
          <Text style={{ fontSize: 10, fontWeight: 500, color: '#bebebe' }}>HEDİYE PARACIK</Text>
        </View>
        <View style={styles.paracıkbakiyeinfomoney3}>
          <Text style={{ fontSize: 18, fontWeight: 700, color: '#bebebe' }}>0,00</Text>
          <Text style={{ fontSize: 10, fontWeight: 500, color: '#bebebe' }}>AKARYAKIT PARACIK</Text>
        </View>
      </View>
      <AntDesign style={styles.paracıkbakiyedownicon} name="caretdown" size={12} color="black" />
      <Text style={styles.paracıkbakiyetext}>Hopi ile anlaşmalı tüm markalarda minimum 1,50 TL değerinde harcayabilirsin</Text>
      <TouchableOpacity style={styles.paracıkbakiyebutton}>
        <Text style={styles.paracıkbakiyebuttontext}><Ionicons name="send" size={20} color="#fff" /></Text>
        <Text style={styles.paracıkbakiyebuttontext}>PARACIK GÖNDER</Text>
        <Text style={styles.paracıkbakiyebuttontext}><AntDesign name="arrowright" size={20} color="#fff" /></Text>
      </TouchableOpacity>
    </View>
  )
}

export default ParacıkBakiye

const styles = StyleSheet.create({
  paracıkbakiyecontainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 20

  },
  paracıkbakiyesubtitle: {
    fontSize: 12,
    fontWeight: 500,
    alignSelf: 'center',
    color: '#bebebe',
    marginTop: 20
  },
  paracıkbakiyetitle: {
    color: '#f29932',
    fontSize: 36,
    fontWeight: 750
  },
  paracıkbakiyeinfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
  paracıkbakiyeinfomoney: {
    alignItems: 'flex-start',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    width: Dimensions.get('window').width / 4
  },
  paracıkbakiyetext: {
    fontSize: 10,
    fontWeight: 400,
    maxWidth: 280,
    alignItems: 'center',
    color: '#000'
    
  },
  paracıkbakiyebutton: {
    backgroundColor: '#f29932',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    gap: 40
  },
  paracıkbakiyebuttontext: {
    color: '#fff',
    padding: 10,

  },
  paracıkbakiyeinfomoney2: {
    alignItems: 'flex-start',
    borderBottomColor: '#bebebe',
    borderBottomWidth: 2,
    width: Dimensions.get('window').width / 4
  },
  paracıkbakiyeinfomoney3: {
    alignItems: 'flex-start',
    borderBottomColor: '#bebebe',
    borderBottomWidth: 2,
    width: Dimensions.get('window').width / 4
  },
  paracıkbakiyedownicon:{
    position:'absolute',
    left:65,
    top:163
  }
})