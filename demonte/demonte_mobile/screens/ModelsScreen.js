import { StyleSheet, Text, View,TouchableOpacity,FlatList,Image, ScrollView} from 'react-native'
import React,{useContext,useEffect} from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Context } from '../context/Context'
import "react-native-reanimated"

export default function ModelsScreen({navigation}) {
  const {state,getModels} = useContext(Context)
  
  useEffect(() => {
    getModels();
  },[]);
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.mainContainer}>
        <View style={styles.backButton}>
          <TouchableOpacity
              style={({ pressed }) => pressed && styles.pressed}
              onPress={() => {
              navigation.navigate('PriceList');
            }}>
          <AntDesign name="back" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.servicesTitle}>
        <Text style={styles.servicesTitleText}>Modellerimiz</Text>
      </View>
      <View style={styles.modelContainer}>
          <FlatList
            data={state}
            keyExtractor={(model) => model.id}
            renderItem={({item}) => {
              return (
                <TouchableOpacity onPress={()=>navigation.navigate('ShowScreen',{id:item.id})}>
                  <View style={styles.modelContiner}>
                    <Image
                      style={styles.modelImage}
                      source={{uri:item.imageUrl}}
                    />
                    <Text style={styles.modelText}>{item.Name}</Text>
                  </View>
                </TouchableOpacity>
              )}}
            />
      </View>
    </View>
    </ScrollView>
    
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
  modelContainer:{
    height:800,
    borderRadius:10,
    marginHorizontal:5,
    marginVertical:15,
    padding:5,
    backgroundColor:'#E7AF00'
  },
  modelImage:{
    height:"90%",
    width:"100%",
    marginHorizontal:5,
    borderRadius:10,
    marginBottom:10,
  },
  modelContiner:{
    marginBottom:10,
    backgroundColor:'#E4E4E4',
    borderRadius:10,
    height:250,
    width:"100%",
    padding:5,
    marginRight:5,
  },
  modelText:{
    marginLeft:15,
    marginRight:15,
    fontSize:18,
    color:'black',
    textAlign:'center',
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
    backgroundColor:'white',
    height:1000,    
  }
})