import { StyleSheet, Text, View,Image, Pressable} from 'react-native'
import React from 'react'

export default function PriceList({navigation}) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Image
            style={styles.titleImage}
            source={require('../assets/WhatsApp Image 2024-02-24 at 16.13.21.jpeg')}
        />
      </View>
      <View style={styles.sloganContainer}>
        <Text style={styles.sloganText}>"Geçmişten gelen en iyi kamp aracı ile özgürlüğüne bir adım daha yakınsınız"</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Pressable
            style={({pressed}) =>pressed && styles.pressed}
            onPress={() => {
              navigation.navigate('ModelsScreen');
            }}
        >
            <View style={styles.buttonContainer}>
                <Image
                    style={styles.buttonImage}
                    source={require('../assets/DSC02211_tg-1198x800.jpg')}
                />
                <View style={styles.buttonTextContainer}>
                    <Text style={styles.buttonText}>Modellerimiz</Text>
                </View>
                
            </View>
        </Pressable>
        <Pressable
            style={({pressed}) =>pressed && styles.pressed}
            onPress={() => {
            navigation.navigate('OtherServicesScreen');
            }}
        >
            <View style={styles.buttonContainer}>
                <Image
                    style={styles.buttonImage}
                    source={require('../assets/Popup-Tavan_Calisma-Yuzeyi-1-2048x1152.png')}
                />
                <View style={styles.buttonTextContainer}>
                    <Text style={styles.buttonText}>Ek Hizmetler</Text>
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
    pressed:{
        opacity:0.5,
    },
    titleContainer:{
        height:'20%',
        width:'95%',
        borderRadius:10,
        marginLeft:10,
        marginTop:10,
    },
    titleImage:{
        height:'100%',
        width:'100%',
        borderRadius:10,
    },
    sloganContainer:{
        borderRadius:10,
        marginVertical:10,
        marginHorizontal:5,
        padding:5,
        backgroundColor:'#6A6A6A',
        height:'7%',
    },
    sloganText:{
        fontSize:14,
        textAlign:'center',
        color:'white',
    },
    buttonsContainer:{
        height:'65%',
        width:'95%',
        borderRadius:15,
        marginLeft:10,
        backgroundColor:'#E7AF00',
        padding:10,
    },
    buttonContainer:{
        height:200,
        width:'100%',
        borderRadius:15,
        padding:10,
        backgroundColor:'#E4E4E4',
        marginBottom:15,
    },
    buttonImage:{
        borderRadius:10,
        height:'85%',
        width:'100%'
    },
    buttonTextContainer:{
        borderRadius:10,
        backgroundColor:'#6A6A6A',
        marginTop:5,
        alignItems:'center',
        justifyContent:'center',
        height:'15%'
    },  
    buttonText:{
        fontSize:18,
        color:'white',
    }
})