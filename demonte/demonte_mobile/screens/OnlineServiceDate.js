import { StyleSheet, Text, View,Pressable} from 'react-native'
import React,{useState} from 'react'
import { AntDesign } from '@expo/vector-icons';
import Input from '../components/Input';

export default function OnlineServiceDate({navigation}) {
  const [chosenDate, setChosenDate] = useState(new Date());
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
      <View style={styles.titleContainer}>
        <Text style={styles.titleContainerText}>Servis Randevusu</Text>
      </View>
      <View style={styles.getDataContainer}>
        <View style={styles.inputContainer}>
          <Input
            label="Tarih"
          />
          <Input
            label="Not" 
          />
        </View>
        <View style={styles.calendarContainer}>
        </View>
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
    getDataContainer:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginHorizontal:10,
      marginVertical:15,

    },
    inputContainer:{
      width:'100%',
      marginRight:5,
    },
    titleContainer:{
      marginHorizontal:15,
      padding:5,
      borderRadius:10,
      backgroundColor:'#6A6A6A',
      marginVertical:20,
    },
    titleContainerText:{
      textAlign:'center',
      fontSize:16,  
      color:'white'
    }, 
})