import { Animated,StyleSheet, Text, View,Image,TouchableOpacity,Pressable} from 'react-native'
import React,{useEffect,useRef} from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const FadeInView = props => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 10000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}>
      {props.children}
    </Animated.View>
  );
};
export default function MainScreen({navigation}) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <View style={styles.iconContainer}>
            <Image
              source={require('../assets/WhatsApp Image 2024-02-24 at 16.13.13.jpeg')}
              style={styles.icon}
            />
        </View>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.contentImageContainer}>
          <FadeInView>
            <Image
                source={require('../assets/WhatsApp Image 2024-02-24 at 16.13.21.jpeg')}
                style={styles.contentImage}
            />
          </FadeInView>
        </View>
        <View style={styles.contentTextContainer}>
          <Text style={styles.contentText}>Demonte'nin sunduklarından daha fazla faydalanmak için;</Text>
        </View>
        <Pressable
          style={({ pressed }) => pressed && styles.pressed}
          onPress={() => {
            navigation.navigate('LoginScreen');
        }}>
          <View style={styles.contentLoginButtonContainer}>
            <Text style={styles.contentLoginButtonText}>Giriş</Text>
            <AntDesign name="arrowright" size={24} color="white" />  
          </View>
          </Pressable>
      </View>
      <View style={styles.footerContainer}>
        <View style={styles.footerLeftSide}>
          <FontAwesome6 name="car-on" size={30} color="black" />
          <Text style={styles.footerLeftSideText}>Yol yardımı ara</Text>
        </View>
        <View style={styles.footerRightSide}>
          <Text style={styles.footerRightSideText}>444 62 47</Text>
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
    topContainer:{
      height:"5%",
      marginRight:10,
      marginLeft:10,
      marginTop:40,
      flexDirection:'row',
      alignItems:'flex-end',
      justifyContent:'flex-end',
    },
    contentContainer:{
      width:'95%',
      height:'60%',
      marginTop:120,
      marginLeft:10,
      borderColor:'lightgrey',
      borderRadius:10,
      padding:5,
    },
    contentImageContainer:{
      height:'30%',
    },
    contentImage:{
      width:'100%',
      height:'100%',
      borderRadius:10,
    },
    contentTextContainer:{
      marginTop:15,
    },
    contentText:{
      fontSize:16,
    },
    contentLoginButtonContainer:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      borderWidth:1,
      borderRadius:5,
      marginTop:10,
      padding:5,
      backgroundColor:'#000230'
    },
    contentLoginButtonText:{
      color:'white',
      marginRight:5,
    },
    contentContinueContainer:{
      marginTop:15,
      alignItems:'center',
      justifyContent:'center',
    },
    footerContainer:{
      borderRadius:5,
      backgroundColor:'#EAEAEA',
      height:'7%',
      width:'95%',
      marginLeft:10,
      marginTop:50,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      padding:5,
    },
    footerLeftSide:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
    },
    footerLeftSideText:{
      marginLeft:10,
    },
    icon:{
      height:40,
      width:40,
    }
})