import { StyleSheet, Text, View,Pressable} from 'react-native'
import React, { useContext } from 'react'
import AddAppointment from '../components/AddAppointment'
import { Context } from '../context/Context'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function OnlineServiceDate({navigation}) {
  const {addAppointment} = useContext(Context)
  return (
    <View style={styles.mainContainer}>
      <View style={styles.backButton}>
          <Pressable
              style={({ pressed }) => pressed && styles.pressed}
              onPress={() => {
              navigation.pop();
            }}>
          <AntDesign name="back" size={24} color="black" />
        </Pressable>
      </View>
      <AddAppointment 
      onSubmit={(date,note) =>
        {addAppointment(date,note,()=>navigation.navigate('Demonte'))}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  backButton:{
    marginTop:60,
    marginLeft:15,
  },
  mainContainer:{
    flex:1,
    backgroundColor:'white',
},
})