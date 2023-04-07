import { StyleSheet, Text, View, Image, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { auth } from '../../server/firebase';
import {signInWithEmailAndPassword} from 'firebase/auth'
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { ChangeUsername,ChangeEmail,ChangePassword} from '../../redux/slices/UserSlices';


const Login = () => {

    const dispatch=useDispatch();
    const user=useSelector((state)=>state.User.username);
    const email=useSelector((state)=>state.User.email);
    const password=useSelector((state)=>state.User.password);



    const navigation=useNavigation();

    const handleLogin=()=>{
        signInWithEmailAndPassword(auth,email,password)
        .then(()=>{
            console.log("BUTONA BASILDI",user);
            navigation.navigate('Welcome',{user:user});
            
        })
        .catch(error=>alert(error.message))
    };

    return (
        <SafeAreaView style={styles.logincontainer}>
            <Image
                source={require('../../img/hopi-logo.png')}
                style={
                    {
                        width: 200,
                        height: 200,
                    }
                }
            />
            <Text style={styles.loginboldtext}>Hopi'n seni cebinden tanır!</Text>
            <Text style={styles.logindefaulttext}>Hopi üyeliğin için kullanmak istediğin <Text style={styles.loginminiboldtext}>adı,email adresi</Text> ve <Text style={styles.loginminiboldtext}>parolanı</Text> aşağıdaki alana yazmalısın</Text>
            <View>
                <TextInput value={user} onChangeText={text=>dispatch(ChangeUsername(text))} style={styles.logininput} placeholder='Kullanıcı Adı' />
                <TextInput value={email} onChangeText={text=>dispatch(ChangeEmail(text))} style={styles.logininput} placeholder='Email' />
                <TextInput value={password} onChangeText={text=>dispatch(ChangePassword(text))} style={styles.logininput} secureTextEntry={true} />
            </View>
            <TouchableOpacity onPress={handleLogin} style={styles.loginbutton}>
                <Text style={styles.loginbuttontext}>DEVAM ET</Text>
            </TouchableOpacity>
            <Text>Kullanıcı adı : kuscuf15@gmail.com</Text>
            <Text>Şifre: 123456</Text>
        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({
    logincontainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap:15
    },
    loginboldtext: {
        fontSize: 15,
        fontWeight: 800
    },
    logindefaulttext: {
        fontSize: 12,
        maxWidth: 350
    },
    loginminiboldtext: {
        fontSize: 12,
        fontWeight: 800
    },
    logininput: {
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        paddingHorizontal: 45,
        paddingVertical: 10,
        fontWeight:800,
        fontSize:16,
        
    },
    loginbutton: {
        backgroundColor: '#cd2a7d',
        borderRadius: 7
    },
    loginbuttontext: {
        paddingHorizontal: 100,
        paddingVertical: 10,
        color:'#fff',fontSize:16
    }
})