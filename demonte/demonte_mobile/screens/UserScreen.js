import { StyleSheet, Text, View,Pressable, ScrollView,TouchableOpacity} from 'react-native'
import React,{useContext,useState} from 'react'
import AuthContextProvider, { AuthContext } from'../store/auth-context'
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Camera, CameraType } from 'expo-camera';
import { FontAwesome } from '@expo/vector-icons';

export default function UserScreen({navigation}) {
  const authContext = useContext(AuthContext)
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.mainContainer}>
        <View style={styles.topContainer}>
          <View style={styles.backButton}>
              <Pressable
                  style={({ pressed }) => pressed && styles.pressed}
                  onPress={() => {
                  navigation.navigate('Demonte');
                }}>
              <AntDesign name="back" size={24} color="black" />
            </Pressable>
          </View>
          <View>
            <Feather name="user" size={24} color="black" />
          </View>
        </View>
        <View style={styles.informationsContainer}>
          <View style={styles.informationContaienrTitlerContainer}>
            <Text style={styles.informationContainerTitle}>Kişisel Bilgiler</Text>
            <View style={styles.informationContainerTitleIcon}>
              <Pressable
                style={({ pressed }) => pressed && styles.pressed}
                onPress={() => {
                navigation.navigate('Demonte');
              }}>
                <FontAwesome name="pencil" size={24} color="white" />
              </Pressable>
            </View>
          </View>
          <View style={styles.informationContainer}>
            <View style={styles.informationLefSideContainer}>
              <Feather name="user" size={24} color="black" />
              <Text style={styles.informationLeftSideText}>Ad, Soyad</Text>
            </View>
            <View style={styles.informationRightSideContainer}>
              <Text style={styles.informationRightSideContainerText}>Murat Berk Yetiştirir</Text>
            </View>
          </View>
          <View style={styles.informationContainer}>
            <View style={styles.informationLefSideContainer}>
              <AntDesign name="calendar" size={24} color="black" />
              <Text style={styles.informationLeftSideText}>Doğum Tarihi</Text>
            </View>
            <View style={styles.informationRightSideContainer}>
              <Text style={styles.informationRightSideContainerText}>14.04.2004</Text>
            </View>
          </View>
          <View style={styles.informationContainer}>
            <View style={styles.informationLefSideContainer}>
              <AntDesign name="idcard" size={24} color="black" />
              <Text style={styles.informationLeftSideText}>TCKN</Text>
            </View>
            <View style={styles.informationRightSideContainer}>
              <Text style={styles.informationRightSideContainerText}>22954281328</Text>
            </View>
          </View>
          <View style={styles.informationContaienrTitlerContainer}>
            <Text style={styles.informationContainerTitle}>Hesap Bilgileri</Text>
            <View style={styles.informationContainerTitleIcon}>
              <Pressable
                style={({ pressed }) => pressed && styles.pressed}
                onPress={() => {
                navigation.navigate('Demonte');
              }}>
                <FontAwesome name="pencil" size={24} color="white" />
              </Pressable>
            </View>
          </View>
          <View style={styles.informationContainer}>
            <View style={styles.informationLefSideContainer}>
              <AntDesign name="mobile1" size={24} color="black" />
              <Text style={styles.informationLeftSideText}>Telefon</Text>
            </View>
            <View style={styles.informationRightSideContainer}>
              <Text style={styles.informationRightSideContainerText}>05070105806</Text>
            </View>
          </View>
          <View style={styles.informationContainer}>
            <View style={styles.informationLefSideContainer}>
            <Fontisto name="email" size={24} color="black" />
              <Text style={styles.informationLeftSideText}>Eposta</Text>
            </View>
            <View style={styles.informationRightSideContainer}>
              <Text style={styles.informationRightSideContainerText}>muratbrk04@gmail.com</Text>
            </View>
          </View>
          <View style={styles.informationContainer}>
            <View style={styles.informationLefSideContainer}>
             <AntDesign name="infocirlceo" size={24} color="black" />
              <Text style={styles.informationLeftSideText}>İletişim İzni</Text>
            </View>
            <View style={styles.informationRightSideContainer}>
              <Text style={styles.informationRightSideContainerText}>SMS,Eposta,Telefon</Text>
            </View>
          </View>
          <View style={styles.informationContainer}>
            <View style={styles.informationLefSideContainer}>
              <Feather name="lock" size={24} color="black" />
              <Text style={styles.informationLeftSideText}>Şifre ve Hesap</Text>
            </View>
            <View style={styles.informationRightSideContainer}>
              <Text style={styles.informationRightSideContainerText}>**********</Text>
            </View>
          </View>
        </View>
        <View style={styles.logoutButtonField}>
          <View style={styles.logoutButton}>
            <Pressable
              style={({pressed}) =>pressed && styles.pressed}
              onPress={authContext.logout}
            >
              <Text style={styles.logoutButtonText}>Çıkış Yap</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
    
    
  )
}

const styles = StyleSheet.create({
  logoutButtonField:{
    marginLeft:15,
    marginRight:15,
    marginTop:25,
  },
  logoutButton:{
    borderWidth:1,
    justifyContent:'center',
    alignItems:'center',
    padding:7,
    borderRadius:15,
  },
  logoutButtonText:{
    fontSize:16,
    color:'black'
  },
  mainContainer:{
    flex:1,
    backgroundColor:'white',
  },
  topContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:15,
    marginTop:60,
  },
  informationsContainer:{
    borderRadius:15,
    marginHorizontal:10,
    marginVertical:15,
    backgroundColor:'#6A6A6A',
    height:450,
    padding:5,
  },
  scrollView:{
    flex:1,
    backgroundColor:'white',
  },
  informationContainerTitle:{
    fontSize:16,
    color:'white',
    marginTop:15,
  },
  informationContainer:{
    borderRadius:10,
    marginVertical:10,
    padding:5,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:'#E4AF00',
  },
  informationLefSideContainer:{
    flexDirection:'row',
    alignItems:'center',
  },
  informationLeftSideText:{
    fontSize:14,
    marginLeft:5,
    color:'black',
  },
  informationRightSideContainer:{
    marginRight:5,
  },
  informationRightSideContainerText:{
    color:'#E4E4E4',  
    fontSize:15,
  },
  informationContaienrTitlerContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  }
})