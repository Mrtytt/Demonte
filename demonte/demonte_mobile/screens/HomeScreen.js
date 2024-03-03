import { Pressable, StyleSheet, Text, View,ScrollView} from 'react-native'
import React from 'react'

import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import MapView from 'react-native-maps';

export default function HomeScreen({navigation}) {
  return (
    <ScrollView style={styles.scrollView}>
<View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.greetingContainerText}>Demonte'ye Hoşgeldiniz</Text>
          <View style={styles.userButtonContainer}>
            <Pressable
              style={({pressed}) =>pressed && styles.pressed}
              onPress={() => {
                navigation.navigate('UserScreen');
              }}>
                <View style={styles.userButtonIconContainer}>
                  <Feather name="user" size={24} color="black" />
                </View>
            </Pressable>
          </View>
        </View>
      </View>
      <View style={styles.carInfoContainer}>
        
      </View>
      <View style={styles.bigButtonsContainer}>
        <Pressable
              style={({pressed}) =>pressed && styles.pressed}
              onPress={() => {
                navigation.navigate('MyCarScreen');
              }}>
          <View style={styles.buttonContainer}>
            <FontAwesome5 name="car" size={30} color='white' />
            <Text style={styles.buttonContainerText}>Aracım</Text>
          </View>
        </Pressable>
        <Pressable
          style={({pressed}) =>pressed && styles.pressed}
          onPress={() => {
            navigation.navigate('MyCarScreen');
          }}>
          <View style={styles.buttonContainer}>
            <FontAwesome name="calendar" size={30} color='white' />
            <Text style={styles.buttonContainerText}>Servis Randevusu</Text>
          </View>
        </Pressable>
      </View>
      <View style={styles.mapContainer}>
        <View style={styles.servicesPlaceContainer}>
          <Text style={styles.servicesPlaceText}>Servis Noktaları</Text>
        </View>
        <MapView style={styles.map}/>
      </View>
    </View>
    </ScrollView>
    
  )
}

const styles = StyleSheet.create({
  mainContainer:{
    backgroundColor:'white',
  },
  pressed:{
    opacity:0.5,
  },
  topContainer:{
    height:'70%',
    width:'100%',
    backgroundColor:'#E7AF00',
    position:'absolute',
  },
  titleContainer:{
    marginLeft:15,
    marginRight:15,
    borderRadius:10,
    marginTop:50,
    padding:7,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    backgroundColor:'#6A6A6A'
  },
  greetingContainerText:{
    color:'white',
    fontSize:16,
  },
  userButtonContainer:{
    marginRight:5,
    borderRadius:'50%',
    padding:5,
    backgroundColor:'white'
  },
  mapContainer:{
    marginHorizontal:15,
    marginTop:10,
    height:'50%',
  },
  map:{
    height:'88%',
    width:'100%',
    borderRadius:10,
  },
  servicesPlaceContainer:{
    height:'12%',
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:5,
  },  
  servicesPlaceText:{
    fontSize:16,
    color:'black',
  },
  bigButtonsContainer:{
    marginHorizontal:15,
    marginTop:25,
    flexDirection:'row',
    height:'25%',
    borderRadius:15,
    padding:10,
    backgroundColor:'#E4E4E4'
  },
  buttonContainer:{
    padding:20,
    borderRadius:15,
    alignItems:'center',
    justifyContent:'center',
    marginRight:15,
    backgroundColor:'#6A6A6A',
    height:'100%',
    width:163
  },
  buttonContainerText:{
    fontSize:14,
    marginTop:5,
    color:'white',
  },
  carInfoContainer:{
    borderWidth:1,
    borderRadius:10,
    height:'30%',
    marginHorizontal:15,
    marginTop:125,
  },
  scrollView:{
    backgroundColor:'white',
  },
})