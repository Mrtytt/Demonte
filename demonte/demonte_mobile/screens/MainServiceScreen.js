import { StyleSheet, Text, View,Pressable} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import MapView from 'react-native-maps';

export default function MainServiceScreen({navigation}) {
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
        <Text style={styles.titleContainerText}>Servis Noktaları</Text>
      </View>
      <View style={styles.mapContainer}>
        <MapView style={styles.map} />
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
    mapContainer:{
      marginHorizontal:15,
      height:'40%',
      borderRadius:15,
    },
    map:{
      height:'100%',
      width:'100%',
      borderRadius:15,
    }
})