import { StyleSheet, Text, View,Pressable} from 'react-native'
import React from 'react'

import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function ServiceScreen({navigation}) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.buttonsContainer}>
      <Pressable
          style={({pressed}) =>pressed && styles.pressed}
          onPress={() => {
            navigation.navigate('MainServiceScreen');
          }}
        >
          <View style={styles.buttonContainer}>
          <View style={styles.buttonLeftSideContainer}>
            <Octicons name="location" size={26} color="#E7AF00" />
            <Text style={styles.buttonLeftSideContainerText}>Yetkili Servis</Text>
          </View>
            <View style={styles.buttonRightSideContainer}>
              <AntDesign name="right" size={24} color="#6A6A6A" />
            </View>
          </View>
        </Pressable>
        <Pressable
          style={({pressed}) =>pressed && styles.pressed}
          onPress={() => {
            navigation.navigate('OnlineServiceDate');
          }}
        >
          <View style={styles.buttonContainer}>
          <View style={styles.buttonLeftSideContainer}>
            <FontAwesome name="wrench" size={24} color="#E7AF00" />
            <Text style={styles.buttonLeftSideContainerText}>Online Servis Randevusu</Text>
          </View>
            <View style={styles.buttonRightSideContainer}>
              <AntDesign name="right" size={24} color="#6A6A6A" />
            </View>
          </View>
        </Pressable>
        <Pressable
          style={({pressed}) =>pressed && styles.pressed}
          onPress={() => {
            navigation.navigate('ServiceHistoryScreen');
          }}
        >
          <View style={styles.buttonContainer}>
          <View style={styles.buttonLeftSideContainer}>
              <FontAwesome name="calendar" size={24} color="#E7AF00" />
              <Text style={styles.buttonLeftSideContainerText}>Randevu Geçmişi</Text>
            </View>
            <View style={styles.buttonRightSideContainer}>
              <AntDesign name="right" size={24} color="#6A6A6A" />
            </View>
          </View>
        </Pressable>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonLeftSideContainer}>
            <FontAwesome name="pencil" size={26} color="#E7AF00" />
            <Text style={styles.buttonLeftSideContainerText}>Randevu Düzenle</Text>
          </View>
          <Pressable
            style={({pressed}) =>pressed && styles.pressed}
            onPress={() => {
              navigation.navigate('EditServiceScreen');
            }}
          >
          <View style={styles.buttonRightSideContainer}>
            <AntDesign name="right" size={24} color="#6A6A6A" />
          </View>
          </Pressable>
          
        </View>
        <Pressable
          style={({pressed}) =>pressed && styles.pressed}
          onPress={() => {
            navigation.navigate('ServiceHistoryScreen');
          }}
        >
        </Pressable>
        <Pressable
          style={({pressed}) =>pressed && styles.pressed}
          onPress={() => {
            navigation.navigate('ServiceOffersScreen');
          }}
        >
          <View style={styles.buttonContainer}>
            <View style={styles.buttonLeftSideContainer}>
              <MaterialIcons name="discount" size={24} color="#E7AF00" />
              <Text style={styles.buttonLeftSideContainerText}>Servis Kampanyaları</Text>
            </View>
            <View style={styles.buttonRightSideContainer}>
              <AntDesign name="right" size={24} color="#6A6A6A" />
            </View>
          </View>
        </Pressable>
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