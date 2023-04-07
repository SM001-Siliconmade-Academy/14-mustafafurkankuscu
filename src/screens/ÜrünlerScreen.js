import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, RefreshControl, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';


const ÜrünlerScreen = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);

  const searchText = useSelector((state) => state.Search.text)
  const isSearchTextChange = useSelector((state) => state.Search.isChange);
  const filter = useSelector((state) => state.Filter.text);
  const filterchosen = useSelector((state) => state.Filter.isChosen);
  const dispatch = useDispatch();

  
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error(error);
      }
    };
    if (data.length == 0) { getProducts() }

  }, [])

  function filterFunction(item) {
    if (filterchosen == true && searchText.length <= 1) {
      return item.category == filter;
    } else if (isSearchTextChange == true && searchText.length > 1) {
      return item.title.includes(searchText)
    }
    else {
      return true;
    }
  }

  const handleSort = () => {
    var newArr = [...data];
    newArr.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
    setData(newArr);
  };


  const handleChangeBrandScreen = () => {
    navigation.navigate('Markalar')
  };

  return (
    <>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#d4d4d4', height: 50 }}>
        <Text style={styles.filtertext}>{data.length} Ürün</Text>
        <TouchableOpacity onPress={handleSort} style={styles.filterbutton}>
          <Text style={styles.filtertext}>Sırala</Text>
          <Text><FontAwesome name="sort-amount-desc" size={16} color="black" /></Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleChangeBrandScreen} style={styles.filterbutton}>
          <Text style={styles.filtertext}>Filtrele</Text>
          <Text><FontAwesome name="filter" size={16} color="black" /></Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', flexWrap: 'wrap' }}>
        {data.filter(filterFunction).map((item) => (
          <View key={item.title} style={{ width: Dimensions.get('window').width / 2 - 20, borderWidth: 1, borderColor: '#d4d4d4', justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ width: 50, height: 65 }} source={{ uri: item.image }} />
            <Text style={{ fontSize: 14, fontWeight: 600, maxWidth: 200, minWidth: 200, padding: 10 }}>{item.title}</Text>
            <Text style={{ fontSize: 12, fontWeight: 400, maxWidth: 200, color: 'gray', minWidth: 200, padding: 10 }}>{item.category}</Text>
            <Text style={{ fontSize: 15, fontWeight: 600, maxWidth: 200, color: '#5ba7e7', minWidth: 200, padding: 10 }}>{item.price} $</Text>
          </View>
        ))}
      </View>



    </>
  )
}

export default ÜrünlerScreen

const styles = StyleSheet.create({
  filtertext: {
    fontSize: 16,
    fontWeight: 600
  },
  filterbutton: {
    flexDirection: 'row'
  }
})

