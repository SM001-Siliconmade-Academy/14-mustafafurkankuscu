import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { ChangeFilterText } from '../redux/slices/FilterSlices';



const MarkalarScreen = () => {
  const navigation = useNavigation();

  const filter = useSelector((state) => state.Filter.text);
  const dispatch = useDispatch();


  const handleChange = (url) => {
    dispatch(ChangeFilterText(url));
    navigation.navigate('Ürünler')
  };

  return (
    <View style={styles.MarkalarContainer}>
      <TouchableOpacity style={styles.MarkalarButton} onPress={() => handleChange("men's clothing")}>
        <Text style={styles.MarkalarButtonText}>men's clothing</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.MarkalarButton} onPress={() => handleChange("jewelery")}>
        <Text style={styles.MarkalarButtonText}>jewelery</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.MarkalarButton} onPress={() => handleChange("electronics")}>
        <Text style={styles.MarkalarButtonText}>electronics</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.MarkalarButton} onPress={() => handleChange("women's clothing")}>
        <Text style={styles.MarkalarButtonText}>women's clothing</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MarkalarScreen

const styles = StyleSheet.create({
  MarkalarContainer:{
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  },
  MarkalarButton:{
    borderBottomColor:'#000',
    borderBottomWidth:1,
    
  },
  MarkalarButtonText:{
    color:'#000',
    fontSize:20,
    fontWeight:600,
    padding:15,
    width:Dimensions.get("window").width
  }
})