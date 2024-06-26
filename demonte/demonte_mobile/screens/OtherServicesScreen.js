import { Pressable, StyleSheet, Text, View,FlatList,Image,ScrollView} from 'react-native'
import React,{useContext,useEffect} from 'react'
import { Context } from '../context/Context'
import { AntDesign } from '@expo/vector-icons';

export default function OtherServicesScreen({navigation}) {
  const {state,getOtherServices} = useContext(Context)
  
  useEffect(() => {
    getOtherServices();
  },[]);
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.mainContainer}>
      <View style={styles.backButton}>
            <Pressable
              style={({ pressed }) => pressed && styles.pressed}
              onPress={() => {
              navigation.navigate('PriceList');
            }}>
          <AntDesign name="back" size={24} color="black" />
        </Pressable>
      </View>
      <View style={styles.servicesTitle}>
        <Text style={styles.servicesTitleText}>Ek Hizmetler</Text>
      </View>
      <ScrollView style={styles.servicesContainer}>
          <FlatList
            data={state}
            keyExtractor={(services) => services.id}
            renderItem={({item}) => {
              return (
                <Pressable onPress={()=>navigation.navigate('ShowScreen',{id:item.id})}>
                  <View style={styles.serviceContiner}>
                    <Image
                      style={styles.servicesImage}
                      source={{uri:item.imageUrl}}
                    />
                    <Text style={styles.serviceText}>{item.Name}</Text>
                  </View>
                </Pressable>
              )}}
            />
        </ScrollView>
    </View>
    </ScrollView>
    
  )
}

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor:'white',
  },
  servicesContainer:{
    borderRadius:10,
    marginHorizontal:15,
    marginVertical:15,
    padding:5,
    backgroundColor:'#E7AF00'
  },
  servicesImage:{
    height:160,
    width:340,
    borderRadius:10,
    marginBottom:10,
    marginRight:20,
  },
  serviceContiner:{
    marginBottom:15,
    backgroundColor:'#6A6A6A',
    borderRadius:10,
    height:210,
    padding:5,
  },
  serviceText:{
    marginLeft:15,
    marginRight:15,
    fontSize:18,
    color:'white',
    textAlign:'center',
  },
  backButton:{
    marginTop:60,
    marginLeft:15,
  },
  servicesTitle:{
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    marginHorizontal:15,
    marginVertical:15,
    backgroundColor:'#E4E4E4',
    padding:3,
  },
  servicesTitleText:{
    fontSize:24,
  },
  scrollView:{
    flex:1,
    backgroundColor:'white',
    height:1000,
  }
})