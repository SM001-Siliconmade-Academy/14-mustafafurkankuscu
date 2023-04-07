import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, Pressable, FlatList } from 'react-native'
import React, { useEffect} from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { selectContent, selectError, selectStatus, getContentAsync } from '../redux/slices/WelcomeSlices';




const Welcome = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const user = useSelector((state) => state.User.username);
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);
  const content = useSelector(selectContent);

  useEffect(() => {
    dispatch(getContentAsync())
  }, []);

  const GoToHopi = () => {
    navigation.navigate("BottomTopRouter");
  };


  return (
    <SafeAreaView style={styles.welcomecontainer}>
      <Text style={styles.welcomeboldtext}>Hoş Geldin {user}</Text>
      <Text style={{ alignSelf: 'center' }}>Hopi'nle ne yapmak istersin?</Text>

      {status === "loading" && <Text>Loading...</Text>}
      {status === "failed" && <Text>{error}</Text>}
      {status === "succeed" && (
        <FlatList
          data={content}
          keyExtractor={(item) => item.icon}
          renderItem={({ item }) => (
            <Pressable onPress={GoToHopi} key={item.text} style={styles.welcomecard}>
              <View>
                <Image style={styles.welcomeicon} source={{ uri: item.icon }} />
                <Text style={styles.welcometext}>{item.text}</Text>
              </View>
              <Image style={styles.welcomeimage} source={{ uri: item.image }} />
              <AntDesign name="arrowright" size={18} color="black" />
            </Pressable>

          )}
        />

      )}

    </SafeAreaView>
  )
}

export default Welcome

const styles = StyleSheet.create({
  welcomecontainer: {
    flex: 1,
    justifyContent: 'flex-start',
    gap: 15
  },
  welcomeboldtext: {
    fontSize: 24,
    fontWeight: 800,
    alignSelf: 'center',
    marginTop: 20
  },
  welcomeicon: {
    width: 120,
    height: 75
  },
  welcomeimage: {
    width: 65,
    height: 82
  },
  welcomecard: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 15,
    borderRadius: 15,
    padding: 15,
    marginTop: 15
  },
  welcometext: {
    maxWidth: 200
  }
})


