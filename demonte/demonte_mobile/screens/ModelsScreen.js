import { StyleSheet, Text, View,Pressable,FlatList,Image, ScrollView} from 'react-native'
import React,{useContext,useEffect} from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Context } from '../context/Context'


export default function ModelsScreen({navigation}) {
  const {state,getModels} = useContext(Context)
  
  useEffect(() => {
    getModels();
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
        <Text style={styles.servicesTitleText}>Modellerimiz</Text>
      </View>
      <View style={styles.modelContainer}>
          <FlatList
            numColumns={2}
            columnWrapperStyle={{justifyContent: 'space-between'}}
            data={state}
            keyExtractor={(model) => model.id}
            renderItem={({item}) => {
              return (
                <Pressable onPress={()=>navigation.navigate('Show',{id:item.id})}>
                  <View style={styles.modelContiner}>
                    <Image
                      style={styles.modelImage}
                      source={{uri:item.imageUrl}}
                    />
                    <Text style={styles.modelText}>{item.carName}</Text>
                  </View>
                </Pressable>
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
    borderRadius:10,
    marginHorizontal:5,
    marginVertical:15,
    padding:5,
    backgroundColor:'#E7AF00'
  },
  modelImage:{
    height:150,
    width:165,
    marginHorizontal:5,
    borderRadius:10,
    marginBottom:10,
  },
  modelContiner:{
    marginBottom:10,
    backgroundColor:'#E4E4E4',
    borderRadius:10,
    height:215,
    width:182,
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
    flex:1,
    backgroundColor:'white',
  }
})