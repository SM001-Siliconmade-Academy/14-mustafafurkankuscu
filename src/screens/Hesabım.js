import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Hesabım = () => {
  return (
    <View>
      <View style={styles.hesabımuser}>
        <Text style={styles.hesabımusertext}><Ionicons name="person-circle-sharp" size={45} color="#434343" /></Text>
        <Text style={styles.hesabımusertext}>Kek Börek</Text>
        <Text style={styles.hesabımusertext}><Feather name="edit-3" size={24} color="#434343" /></Text>
      </View>

      <View style={styles.hesabımbilgiler}>
        <View style={styles.hesabımbilgiler1}>
          <Text><Ionicons name="notifications" size={24} color="#434343" /></Text> 
          <Text>Bildirimlerim</Text>
        </View>
        <MaterialCommunityIcons name="greater-than" size={16} color="#434343" />
      </View>

      <View style={styles.hesabımbilgiler}>
        <View style={styles.hesabımbilgiler1}>
          <Text><FontAwesome name="star" size={24} color="#434343" /></Text> 
          <Text>Listelerim</Text>
        </View>
        <MaterialCommunityIcons name="greater-than" size={16} color="#434343" />
      </View>

      <View style={styles.hesabımbilgiler}>
        <View style={styles.hesabımbilgiler1}>
          <Text><Feather name="phone-call" size={24} color="#434343" /></Text> 
          <Text>Müşteri Hizmetlerim</Text>
        </View>
        <MaterialCommunityIcons name="greater-than" size={16} color="#434343" />
      </View>
      
    </View>
  )
}

export default Hesabım

const styles = StyleSheet.create({
  hesabımuser: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 10,
    padding: 20,
    borderBottomWidth:1,
    borderBottomColor:'#434343'
  },
  hesabımusertext: {
    fontSize: 28,
    fontWeight: 500,
    color: '#434343',
  },
  hesabımbilgiler:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:10,
    borderBottomWidth:1,
    borderBottomColor:'#434343'
  },
  hesabımbilgiler1:{
    flexDirection:'row',
    justifyContent:'space-between',
    gap:20
  }
})