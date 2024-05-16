import { StyleSheet, Text, View,Pressable,FlatList,TouchableOpacity} from 'react-native'
import React,{useContext,useEffect} from 'react'
import { Context } from '../context/Context'
import { AntDesign } from '@expo/vector-icons';

export default function ServiceHistoryScreen({navigation}) {
  const {state,getAppointments} = useContext(Context)

  useEffect(() => {
    getAppointments();
  },[]);
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
        <Text style={styles.titleContainerText}>Servis Geçmişi</Text>
      </View>
      <View style={styles.modelContainer}>
          <FlatList
            data={state}
            keyExtractor={(appointment) => appointment.id}
            renderItem={({item}) => {
              return (
                <TouchableOpacity onPress={()=>navigation.navigate('ShowAppointment',{id:item.id})}>
                  <View style={styles.modelContiner}>
                    <Text style={styles.modelDate}>{item.date}</Text>
                    <Text style={styles.modelText}>{item.note}</Text>
                  </View>
                </TouchableOpacity>
              )}}
            />
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
    modelContainer:{
      height:800,
      borderRadius:10,
      marginHorizontal:5,
      marginVertical:15,
      padding:5,
    },
    modelContiner:{
      marginBottom:10,
      backgroundColor:'#E7AF00',
      borderRadius:10,
      width:"100%",
      padding:7,
      marginRight:5,
    },
    modelText:{
      marginRight:15,
      fontSize:18,
      color:'white',
      fontWeight:"500",
    },
    modelDate:{
      fontWeight:"600",
      fontSize:18,
      marginBottom:5,
    }
})