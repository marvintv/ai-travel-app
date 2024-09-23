import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import {useNavigation, useRouter} from 'expo-router'
import { Colors } from './../../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../configs/FirebaseConfig';


export default function SignUp() {

    const navigation = useNavigation();

    const router = useRouter();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [fullname, setFullName] = useState();


    useEffect( () => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    const onCreateAccount =  () => {
        console.log('press')
        if(!email&& !password && !fullname){
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;

            console.log(user)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..

            console.log(errorMessage, errorCode)
        });
    }
  return (
    <View style={{
        padding: 25,
        paddingTop: 50,
        backgroundColor: Colors.WHITE,
        height: '100%'

    }}>
    <TouchableOpacity onPress={() => router.back()}>
    <Ionicons name="arrow-back" size={24} color="black" />
</TouchableOpacity>

    
      <Text style={{
        fontFamily: 'outfit-bold',
        fontSize: 30,
        marginTop: 30
      }}>Create a New Account</Text>


    <View style={{
        marginTop: 60,
 
    }}>
    {/* userfull name */ } 

            <Text style={{
                fontFamily: 'outfit' }}>
                    Full Name
            </Text>

            <TextInput  style={styles.input} placeholder='Enter Full Name'
                onChangeText={(value) => setFullName(value)}
            />

            <Text style={{
                fontFamily: 'outfit' , marginTop: 20}}>
                    Email
            </Text>

            <TextInput  style={styles.input} onChangeText={(value) => setEmail(value)} placeholder='Enter Email'/>

                
            <Text style={{
                fontFamily: 'outfit',
                marginTop: 20
            }}>
            Password
            </Text>

            <TextInput onChangeText={(value) => setPassword(value)}  secureTextEntry={true} type="password" style={styles.input} placeholder='Enter password'/>
    </View>


        {/* screate account button */ } 
        <TouchableOpacity onPress={onCreateAccount} style={{
            padding: 20,
            marginTop: 50,
            backgroundColor: Colors.PRIMARY,
            borderRadius: 15, 
    
        }}>
            <Text style={{color: Colors.WHITE,
                textAlign: 'center',
            }}>
                Create Account
            </Text>
        </TouchableOpacity>
    
            {/* Sign in button */ }
            <TouchableOpacity 
                onPress={()=> router.replace('auth/sign-in')}
            style={{
                padding: 20,
                marginTop: 20,
                backgroundColor: Colors.WHITE,
                borderRadius: 15, 
                borderWidth: 1
        
            }}>
                <Text style={{color: Colors.PRIMARY,
                    textAlign: 'center',
                }}>
                    Sign In
                </Text>
            </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
    input: {
        padding: 15,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: Colors.GRAY,
        fontFamily: 'outfit',


    }

})