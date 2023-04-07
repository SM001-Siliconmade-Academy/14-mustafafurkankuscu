import { StyleSheet, Text, View, Image, Dimensions, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import {
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    orderBy,
    query,
  } from "firebase/firestore";
import { db } from "../server/firebase";


const Teklifler = () => {
    
    const [usernames, setUserNames] = useState([]);
 
  useEffect(() => {
    const usersRef = collection(db, "images");
    const q = query(usersRef);
    getDocs(q).then((querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.url, doc.data());
        data.push({ id: doc.url, ...doc.data() });
      });
      setUserNames(data);
    });
  }, []);
    
   console.log("SONUÇ",usernames)

    const data2 = [
        {
            id: 1,
            title: 'https://i.hizliresim.com/hdbsu6z.PNG'
        },
        {
            id: 2,
            title: 'https://i.hizliresim.com/qw2nnzr.PNG'
        },
        {
            id: 3,
            title: 'https://i.hizliresim.com/ao90c1s.PNG'
        },
        {
            id: 4,
            title: 'https://i.hizliresim.com/bckuim4.PNG'
        },
        {
            id: 5,
            title: 'https://i.hizliresim.com/82ips8o.PNG'
        },
        {
            id: 6,
            title: 'https://i.hizliresim.com/rhgo4w3.PNG'
        },
        {
            id: 7,
            title: 'https://i.hizliresim.com/lrlif7z.PNG'
        },
        {
            id: 8,
            title: 'https://i.hizliresim.com/lkjj2uo.PNG'
        },
        {
            id: 9,
            title: 'https://i.hizliresim.com/nnwpwrl.PNG'
        },
        {
            id: 10,
            title: 'https://i.hizliresim.com/3iut19s.PNG'
        },
        {
            id: 11,
            title: 'https://i.hizliresim.com/1mnt1og.PNG'
        },
        {
            id: 12,
            title: 'https://i.hizliresim.com/38qxp2l.PNG'
        },
        {
            id: 13,
            title: 'https://i.hizliresim.com/ii323a3.PNG'
        },
        {
            id: 14,
            title: 'https://i.hizliresim.com/itvj52x.PNG'
        },
        {
            id: 15,
            title: 'https://i.hizliresim.com/tw78ej7.PNG'
        },
        {
            id: 16,
            title: 'https://i.hizliresim.com/9pijotu.PNG'
        },
    ];

    return (
        <ScrollView>
            <FlatList
                data={usernames}
                keyExtractor={(item) => usernames.url}
                numColumns={2}
                renderItem={({ item }) => (
                    <Image style={{ width: Dimensions.get('window').width / 2, height: 110 }} source={{ uri: item.url }} />

                )}
            />

        </ScrollView>
    )
}

export default Teklifler

const styles = StyleSheet.create({})

{/* <FlatList
                data={data2}
                keyExtractor={(item) => item.id}
                numColumns={2}
                renderItem={({ item }) => (
                    <Image style={{ width: Dimensions.get('window').width / 2, height: 110 }} source={{ uri: item.title }} />

                )}
            /> */}