import { StyleSheet, Text, View,Pressable} from 'react-native'
import React from 'react'
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


export default function OtherScreen() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonLeftSideContainer}>
            <MaterialIcons name="sos" size={24} color="#E7AF00" />
            <Text style={styles.buttonLeftSideContainerText}>Yol Yardım</Text>
          </View>
          <View style={styles.buttonRightSideContainer}>
            <AntDesign name="right" size={24} color="#6A6A6A" />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonLeftSideContainer}>
            <SimpleLineIcons name="bell" size={24} color="#E7AF00" />
            <Text style={styles.buttonLeftSideContainerText}>İkaz Lambaları</Text>
          </View>
          <View style={styles.buttonRightSideContainer}>
            <AntDesign name="right" size={24} color="#6A6A6A" />
          </View>
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
  buttonsContainer:{
    marginHorizontal:15,
    marginTop:60,
    padding:5,
  },
  buttonContainer:{
    padding:10,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginVertical:10,
    borderBottomWidth:1,
    borderBottomColor:'#E4E4E4',
  },
  buttonLeftSideContainer:{
    flexDirection:'row',
    alignItems:'center',
  },
  buttonLeftSideContainerText:{
    marginLeft:10,
    fontSize:16,
  }
})