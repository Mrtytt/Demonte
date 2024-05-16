import { StyleSheet, Text, View,Pressable,FlatList,Image} from 'react-native'
import React,{useContext,useEffect} from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Context } from '../context/Context'

export default function OffersScreen({navigation}) {
  const {state,getOffers} = useContext(Context)
  
  useEffect(() => {
    getOffers();
  },[]);
  return (
    <View style={styles.mainContaienr}>
      <View style={styles.backButton}>
        <Pressable
          style={({ pressed }) => pressed && styles.pressed}
            onPress={() => {
            navigation.navigate('Demonte');
          }}>
          {<AntDesign name="back" size={24} color="black" />}
        </Pressable>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleContainerText}>Kampanyalar</Text>
      </View>
      <View style={styles.offerContainer}>
          { <FlatList
            data={state}
            keyExtractor={(offer) => offer.id}
            renderItem={({item}) => {
              return (
                <Pressable onPress={()=>navigation.navigate('ShowScreen',{id:item.id})}>
                  <View style={styles.offerContiner}>
                    <Image
                      style={styles.offerImage}
                      source={{uri:item.imageUrl}}
                    />
                    <Text style={styles.offerText}>{item.Name}</Text>
                  </View>
                </Pressable>
              )}}
            />}
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
    offerContainer:{
      borderRadius:10,
      marginHorizontal:15,
      marginVertical:15,
      padding:5,
      backgroundColor:'#E7AF00'
    },
    offerImage:{
      height:175,
      width:340,
      borderRadius:10,
      marginBottom:10,
      marginRight:20,
    },
    offerContiner:{
      marginBottom:15,
      backgroundColor:'#E4E4E4',
      borderRadius:10,
      height:225,
      padding:5,
    },
    offerText:{
      marginLeft:15,
      marginRight:15,
      fontSize:18,
      color:'black',
      textAlign:'center',
    },
    titleContainer:{
      borderRadius:10,
      alignItems:'center',
      justifyContent:'center',
      marginHorizontal:15,
      marginVertical:15,
      backgroundColor:'#E4E4E4',
      padding:3,
    },
    titleContainerText:{
      fontSize:24,

    }
})