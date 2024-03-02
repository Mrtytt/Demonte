import { Animated,StyleSheet, Text, View,Image,TouchableOpacity,Pressable, ImageBackground} from 'react-native'
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
      <View style={styles.contentContainer}>
        <ImageBackground
          source={require('../assets/Ekran görüntüsü 2024-03-02 174528.png')}
          style={styles.contentImage}
        >
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
        </ImageBackground>
        
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    mainContainer:{
      flex:1,
      backgroundColor:'white',
    },
    contentContainer:{
      flex:1,
    },
    contentImageContainer:{
      justifyContent:'center',
    },
    contentImage:{
      width:'100%',
      height:'101%',
    },
    contentLoginButtonContainer:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      borderRadius:15,
      borderWidth:3,
      borderColor:'white',
      marginTop:700,
      marginLeft:15,
      marginRight:15,
      padding:5,
    },
    contentLoginButtonText:{
      color:'white',
      marginRight:5,
    },
})