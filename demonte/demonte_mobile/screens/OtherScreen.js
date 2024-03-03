import { StyleSheet, Text, View,Pressable} from 'react-native'
import React,{useContext} from 'react'
import AuthContextProvider, { AuthContext } from'../store/auth-context'

export default function OtherScreen() {
  const authContext = useContext(AuthContext)
  return (
    <View>

    </View>
  )
}

const styles = StyleSheet.create({
  
})