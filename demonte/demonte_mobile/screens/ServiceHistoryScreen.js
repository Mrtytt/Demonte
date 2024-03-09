import { StyleSheet, Text, View,Pressable} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

export default function ServiceHistoryScreen({navigation}) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.backButton}>
          <Pressable
              style={({ pressed }) => pressed && styles.pressed}
              onPress={() => {
              navigation.navigate('Services');
            }}>
          <AntDesign name="back" size={24} color="black" />
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:'white',
    },
    backButton:{
        marginTop:60,
        marginLeft:15,
    },
})