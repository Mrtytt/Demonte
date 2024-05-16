import { StyleSheet, Text, View,TouchableOpacity,Image} from 'react-native'
import React,{useContext,useEffect}from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Context } from '../context/Context'

export default function ModelScreen({navigation,route}) {
  const {state} = useContext(Context)
  const model = state.find((model) => model.id === route.params.id)
  return (
    <View style={styles.mainContainer}>
      <View style={styles.backContainer}>
        <View style={styles.backButton}>
          <TouchableOpacity
            onPress={() => {
              navigation.pop();
            }}
          >
            <AntDesign name="back" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.contentContainer}>
      <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{model.date}</Text>
        </View>
        <View style={styles.contextContainer}>
          <Text style={styles.contextText}>{model.note}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer:{
    flex:1
  },
  backContainer:{
    marginTop:60,
    marginLeft:15,
  },
  contentContainer:{
    height:'80%',
  },
  titleContainer:{
    marginTop:15,
    marginLeft:15,
    marginRight:15,
    borderWidth:1,
    borderRadius:10,
    alignItems:'center',
    padding:5,
    backgroundColor:'#000230'
  },
  titleText:{
    fontSize:16,
    color:'white',
  },
  contextContainer:{
    marginTop:15,
    marginLeft:15,
    marginRight:15,
    borderWidth:1,
    borderRadius:10,
    alignItems:'center',
    padding:5,
    backgroundColor:'#000230'
  },
  contextText:{
    fontSize:16,
    color:'white',
  }
})