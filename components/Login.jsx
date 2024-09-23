import { View, Text, Image, StyleSheet, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { useRouter } from 'expo-router'
export default function Login() {

  const router = useRouter();
  return (
    <View>
      <Image source={require('./../assets/images/login.jpeg')}
       style={{
        width: '100%',
        height: 520,

       }}
      />
      <View style={styles.container}>
        <Text style=
        {{fontSize: 30,
        fontFamily: 'outfit-bold',
        textAlign: 'center',
        marginTop: 10
        }}>
          AI Travel Planner
        </Text>

        <Text
         style={{
          fontFamily: 'outfit',
          fontSize: 20,
          textAlign: 'center',
          colors: Colors.GRAY,
          marginTop: 20
         }
         }
        >Discover your next adventure effortless. Personalized trips at your fingertips. Travel smarter with AI-driven insights</Text>

        <TouchableOpacity style={styles.button}
         onPress={() => router.push('/auth/sign-in')}
        >
         <Text style={{
          fontFamily:'outfit',
          textAlign:'center',
          fontSize: 17, 
          color: Colors.WHITE,

         }}>Sign in with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: Colors.WHITE,
      marginTop: -20,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      height: '100%',
      padding: 25,
    },
    button: {
      padding: 15, 
      backgroundColor: Colors.PRIMARY,
      borderRadius: 99,
      marginTop: '25%'
    }
})