import { Pressable, StyleSheet, Text, View,ScrollView,FlatList,Image} from 'react-native'
import React,{useContext,useEffect} from 'react'

import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

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
        <View style={styles.offersContainer}>
          <View style={styles.offerTitle}>
            <Text></Text>
            <Pressable
              style={({pressed}) =>pressed && styles.pressed}
              onPress={()=>navigation.navigate('OffersScreen')}
            >
              <View style={styles.offerTitleSecondPart}>
                <Text style={styles.offerTitleText}>Tüm Kampanyalar</Text>
                <View style={styles.offerTitleSecondpartIcon}>
                  <AntDesign name="right" size={20} color="white" />
                </View>
              </View>
            </Pressable>
          </View>
            <Pressable 
              onPress={()=>navigation.navigate('OffersScreen')}
            >
              <View style={styles.titleContiner}>
                <Image
                  style={styles.offerImage}
                  source={{uri:"data:image/jpeg;base64,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"}}

                  />
                <Text style={styles.titleText}>1. Kampanya</Text>
              </View>
            </Pressable>
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
    height:400,
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
    height:100,
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
    height:200,
    marginHorizontal:15,
    marginTop:125,
  },
  scrollView:{
    backgroundColor:'white',
    height:1000
  },
  offersContainer:{
    borderRadius:10,
    marginHorizontal:15,
    marginVertical:15,
    padding:5,
    backgroundColor:'#6A6A6A'
  },
  offerImage:{
    height:150,
    width:350,
    borderRadius:10,
    marginBottom:10,
    marginRight:20,
  },
  titleText:{
    fontSize:20,
    color:'white',
    textAlign:'center',
  },
  offerTitle:{
    marginBottom:10,
    borderRadius:10,
    padding:4,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    backgroundColor:'white',
  },
  offerTitleSecondPart:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },  
  offerTitleSecondpartIcon:{
    borderRadius:'50%',
    marginLeft:5,
    backgroundColor:'#6A6A6A',
    padding:1,
  }
})