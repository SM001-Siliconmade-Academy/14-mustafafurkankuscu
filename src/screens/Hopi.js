import { SafeAreaView, StyleSheet, Text, View, Image, Dimensions, ScrollView, TextInput, TouchableHighlight, TouchableOpacity, Linking, FlatList,Button} from 'react-native'
import React, { useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons';
import UrunAramaRouter from '../routers/UrunAramaRouter';
import {useSelector,useDispatch} from 'react-redux';
import { getBannerContentAsync, selectBannerContent, selectBannerError,selectBannerStatus } from '../redux/slices/BannersSlice';
import { getMyOffersContentAsync, selectMyOfferContent, selectMyOfferError, selectMyOfferStatus } from '../redux/slices/MyOffersSlices';
import { getClickWinItemsContentAsync, selectClickWinItemContent, selectClickWinItemError, selectClickWinItemStatus } from '../redux/slices/ClickWinItemsSlice';
import { getLoveMarksContentAsync, selectLoveMarkContent, selectLoveMarkError, selectLoveMarkStatus } from '../redux/slices/LoveMarksSlice';
import { ChangeSearchText } from '../redux/slices/SearchSlices';
import { getOfferStorageContentAsync, selectOfferContent, selectOfferError, selectOfferStatus } from '../redux/slices/OfferSlice';



const Hopi = () => {
 

  const dispatch = useDispatch();
  const user=useSelector((state)=>state.User.username);
  const search=useSelector((state)=>state.Search.text);
  

  const bannerContent=useSelector(selectBannerContent);
  const bannerError=useSelector(selectBannerError);
  const bannerStatus=useSelector(selectBannerStatus);

  const MyOfferContent=useSelector(selectMyOfferContent);
  const MyOfferError=useSelector(selectMyOfferError);
  const MyOfferStatus=useSelector(selectMyOfferStatus);

  const ClickWinItemContent=useSelector(selectClickWinItemContent);
  const ClickWinItemError=useSelector(selectClickWinItemError);
  const ClickWinItemStatus=useSelector(selectClickWinItemStatus);

  const LoveMarkContent=useSelector(selectLoveMarkContent);
  const LoveMarkError=useSelector(selectLoveMarkError);
  const LoveMarkStatus=useSelector(selectLoveMarkStatus);

  const OfferContent=useSelector(selectOfferContent);
  const OfferError=useSelector(selectOfferError);
  const OfferStatus=useSelector(selectOfferStatus);

 

  useEffect(() => {
    dispatch(getBannerContentAsync())
    dispatch(getMyOffersContentAsync())
    dispatch(getClickWinItemsContentAsync())
    dispatch(getLoveMarksContentAsync())
    dispatch(getOfferStorageContentAsync())

  }, [])

  const GoToVisitUrl = (url) => {
    Linking.openURL(url);
  };

  

  const HopiContent=()=>{
    
    return (
      <>
      <View style={styles.hopicontainerheader}>
        <View style={styles.hopicontainerheaderleft}>
        <Ionicons name="ios-sunny" size={24} color="#dca548" />
        <Text style={{ fontSize: 13, fontWeight: 650, maxWidth: 80 }}>Merhaba {user}</Text>
      </View>
      <View style={styles.hopicontainerheaderright}>
        <Text style={{ fontSize: 13, fontWeight: 650, color: '#e3b62f' }}>201.50 Paracık'ın var.</Text>
        <Text style={{ fontSize: 11, fontWeight: 400 }}>1 Paracık=1 TL değerinde kullanabilirsin.</Text>
        <Text style={{ fontSize: 11, fontWeight: 400, textDecorationLine: 'underline' }}>Paracıklarıma Git</Text>
      </View>
    </View>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 20, fontWeight: 600 }}>Teklifi İncele</Text>
          <Text style={{ backgroundColor: '#e1e1e1', paddingHorizontal: 10, borderRadius: 15 }}>1/13</Text>
        </View>
        {OfferStatus==="loading" && <Text>Loading...</Text>}
        {OfferStatus==="failed" && <Text>{OfferError}</Text>}
        {OfferStatus=== "succeed" &&(
          <Image style={{ width: Dimensions.get('window').width - 30, height: 250, borderRadius: 20 }} source={{ uri: OfferContent }} />
        )}
        

        {bannerStatus === "loading" && <Text>Loading...</Text>}
        {bannerStatus === "failed" && <Text>{bannerError}</Text>}
        {bannerStatus === "succeed" &&
        bannerContent.map((banner) => {
          return (<TouchableOpacity onPress={() => GoToVisitUrl(banner.visitUrl)} key={banner.visitUrl}>
            <Image key={banner.visitUrl} style={{ width: Dimensions.get('window').width - 30, height: 120, borderRadius: 5 }} source={{ uri: banner.imageUrl }} />
          </TouchableOpacity>
          )
        })}

        

        <View style={{ borderWidth: 2, borderColor: '#43c5f3', padding: 10 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 20, fontWeight: 600 }}>Tekliflerim</Text>
            <Text style={{ paddingHorizontal: 10, borderRadius: 15 }}>Tümünü Gör</Text>
          </View>
          {MyOfferStatus === "loading" && <Text>Loading...</Text>}
          {MyOfferStatus === "failed" && <Text>{MyOfferError}</Text>}
          {MyOfferStatus === "succeed" &&(
            <FlatList
            horizontal
            ItemSeparatorComponent={() => <View style={{ width: 15 }}></View>}
            showsHorizontalScrollIndicator={false}
            data={MyOfferContent}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <View style={styles.offers}>
                <Image style={{ width: 160, height: 120 }} source={{ uri: item.productUrl }} />
                <Text style={{ fontSize: 14, fontWeight: 500 }}>{item.brandName}</Text>
                <Text style={{ fontSize: 12, fontWeight: 300, color: 'gray', maxWidth: 165 }}>{item.title}</Text>
                <Text style={{ fontSize: 13, fontWeight: 500, color: '#43c5f3', maxWidth: 165 }}>{item.description}</Text>
              </View>
          )}
        />
        )}
        </View>

        <View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 20, fontWeight: 600 }}>Tıkla Kazan</Text>
            <Text style={{ paddingHorizontal: 10, borderRadius: 15 }}>Tümünü Gör</Text>
          </View>

          {ClickWinItemStatus === "loading" && <Text>Loading...</Text>}
        {ClickWinItemStatus === "failed" && <Text>{ClickWinItemError}</Text>}
        {ClickWinItemStatus ==="succeed" && (
          <FlatList
          ItemSeparatorComponent={() => <View style={{ height:10}}></View>}
          numColumns={2}
          data={ClickWinItemContent}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', gap: 20}}>
              <Image style={{ width: 65, height: 35, borderColor: '#gray', borderWidth: 1 }} source={{ uri: item.brandUrl }} />
              <View style={{ flexDirection: 'column', justifyContent: 'space-around',minWidth:100 }}>
                <Text style={{ fontSize: 14, fontWeight: 600 }}>{item.brandName}</Text>
                <Text>{item.brandDescription}</Text>
              </View>
              <TouchableOpacity style={{ backgroundColor: '#43c5f3', width: 60, height: 30, borderRadius: 15, alignSelf: 'center' }}>
                <Text style={{ color: '#fff', alignSelf: 'center' }}>Kazan</Text>
              </TouchableOpacity>
            </View>
          )}
        />
        )}
        </View>

        <View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 20, fontWeight: 600 }}>Sevebileceğin Markalar</Text>
            <Text style={{ paddingHorizontal: 10, borderRadius: 15 }}>Tümünü Gör</Text>
          </View>

          {LoveMarkStatus === "loading" && <Text>Loading...</Text>}
          {LoveMarkStatus === "failed" && <Text>{LoveMarkError}</Text>}
          {LoveMarkStatus === "succeed" &&(
            <FlatList
            ItemSeparatorComponent={() => <View style={{ width:10}}></View>}
            data={LoveMarkContent}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <View>
              <Image style={{width:150,height:75,borderWidth:1,borderColor:'#000'}} source={{uri:item.imageUrl}}/>
              <Text style={{fontSize:16,fontWeight:500}}>{item.brand}</Text>
            </View>
            )}
          />
          )}
        </View>

        <Text style={{ fontSize: 20, fontWeight: 600 }}>Sevebileceğin Kategoriler</Text>
        <View style={{ flexDirection: 'row' }}>
          <Image style={{ width: Dimensions.get('window').width / 1.7, height: 200, borderRadius: 20 }} source={require('../img/giyim.png')} />
          <View style={{ flexDirection: 'column' }}>
            <Image style={{ width: Dimensions.get('window').width / 2.5, height: 100, borderRadius: 20 }} source={require('../img/ayakkabı.png')} />
            <Image style={{ width: Dimensions.get('window').width / 2.5, height: 100, borderRadius: 20 }} source={require('../img/spor.png')} />
          </View>
        </View>


        <Text>TANK ÇALIŞIYOR</Text>
        
        


        
    </>

    
    )
  }


  
  return (
    <ScrollView>
      <View style={styles.hopicontainer}>
        <TextInput placeholder='Marka veya kampanya ara' value={search} onChangeText={(value)=>dispatch(ChangeSearchText(value))} style={styles.hopiinput} />
        {search.length>0 ? <UrunAramaRouter/>:<HopiContent/>}
        
       
      </View>
    </ScrollView>
  )
}

export default Hopi



const styles = StyleSheet.create({
  hopicontainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: 'column',
    gap: 20
  },
  hopicontainerheader: {
    flexDirection: 'row',
    //justifyContent:'space-around',
    gap: 5,
  },
  hopicontainerheaderleft: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10
  },
  hopicontainerheaderright: {
    flex: 3,
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  hopiinput: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 15
  },
  offers: {
    flexDirection: 'column',
    justifyContent: 'flex-start',

  },

})

// source={require('../img/anasayfabanner.png')}
{/* <Image style={{ width: Dimensions.get('window').width-30, height: 120,borderRadius:5}} source={{uri:'https://firebasestorage.googleapis.com/v0/b/exampleapp-d920a.appspot.com/o/banner1.jpeg?alt=media&token=834d55d4-b14a-4f46-83d7-4c4c72021bad'}} />
      <Image style={{ width: Dimensions.get('window').width-30, height: 120,borderRadius:5}} source={{uri:'https://firebasestorage.googleapis.com/v0/b/exampleapp-d920a.appspot.com/o/banner2.jpeg?alt=media&token=834d55d4-b14a-4f46-83d7-4c4c72021bad'}} />
      <Image style={{ width: Dimensions.get('window').width-30, height: 120,borderRadius:5}} source={{uri:'https://firebasestorage.googleapis.com/v0/b/exampleapp-d920a.appspot.com/o/banner3.jpeg?alt=media&token=834d55d4-b14a-4f46-83d7-4c4c72021bad'}} />
      <Image style={{ width: Dimensions.get('window').width-30, height: 120,borderRadius:5}} source={{uri:'https://firebasestorage.googleapis.com/v0/b/exampleapp-d920a.appspot.com/o/banner4.jpeg?alt=media&token=834d55d4-b14a-4f46-83d7-4c4c72021bad'}} /> */}

      // const data = [
      //   {
      //     id: '1',
      //     productUrl: 'https://img-hopi.mncdn.com/a4/66/a46652becc274c719b2a432c964cfb23.jpeg',
      //     brandName: 'COSTA COFFEE',
      //     title: 'Costa Coffee kahve alışverişinde ',
      //     description: '%10 Hediye Paracık'
      //   },
      //   {
      //     id: '2',
      //     productUrl: 'https://img-hopi.mncdn.com/18/89/1889e60d85184e64a4a6f6ed70c10b49.jpeg',
      //     brandName: 'BOYNER & YKM',
      //     title: 'Mobil ödeme ile 400 TL ve üzeri alışverişlerde',
      //     description: '100 TL değerinde hediye paracık kazan'
      //   },
      //   {
      //     id: '3',
      //     productUrl: 'https://img-hopi.mncdn.com/d2/93/d293fc5e02d3414895a139629d6c3305.jpeg',
      //     brandName: 'BOYNER',
      //     title: 'Boyner mağaza alışverişinde 100 Hediye Paracıkın',
      //     description: '1000 TLye varan değerde'
      //   }
      // ];      

      // <View style={{ flexDirection: 'row', justifyContent: 'flex-start', gap: 20 }}>
      //     <Image style={{ width: 100, height: 70, borderColor: '#gray', borderWidth: 1 }} source={{ uri: 'https://img-hopi.mncdn.com/64/e4/64e4e18c52c44711805d49138cb19177.png' }} />
      //     <View style={{ flexDirection: 'column', justifyContent: 'space-around' }}>
      //       <Text style={{ fontSize: 14, fontWeight: 600 }}>US POLO</Text>
      //       <Text>%3 Paracık</Text>
      //     </View>
      //     <TouchableOpacity style={{ backgroundColor: '#43c5f3', width: 60, height: 30, borderRadius: 15, alignSelf: 'center' }}>
      //       <Text style={{ color: '#fff', alignSelf: 'center' }}>Kazan</Text>
      //     </TouchableOpacity>
      //   </View>

      // horizontal
      // ItemSeparatorComponent={() => <View style={{ width: 10 }}></View>}
      // showsHorizontalScrollIndicator={false}

