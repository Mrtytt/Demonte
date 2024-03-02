import { StyleSheet, Text, View,Pressable} from 'react-native'
import React,{useContext} from 'react'
import AuthContextProvider, { AuthContext } from'../store/auth-context'

export default function OtherScreen() {
  const authContext = useContext(AuthContext)
  return (
    <View style={styles.logoutButtonField}>
        <View style={styles.logoutButton}>
        <Pressable
          style={({pressed}) =>pressed && styles.pressed}
          onPress={authContext.logout}
        >
          <Text style={styles.logoutButtonText}>Çıkış Yap</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  logoutButtonField:{
    marginLeft:15,
    marginRight:15,
    marginTop:25,
  },
  logoutButton:{
    borderWidth:1,
    justifyContent:'center',
    alignItems:'center',
    padding:7,
    borderRadius:5,
    backgroundColor:'black'
  },
  logoutButtonText:{
    fontSize:16,
    color:'white'
  },
})