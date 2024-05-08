import { Alert, Button, StyleSheet, Text, View,TouchableOpacity,Pressable,Image} from 'react-native'
import React, {useState} from 'react'
import AuthForm from './AuthForm'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';

export default function AuthContent({isLogin,onAuthenticate}) {
    const navigation = useNavigation()
    const [credentialsInvalid, setcredentialsInvalid] = useState({
        email:false,
        password:false,
        confirmEmail:false,
        confirmPassword:false,
    })

    function submitHandler(credentials)
    {
        console.log(credentials)
        let {email,password} = credentials
        
        
        email=email.trim()
        password=password.trim()

        const emailIsValid=email.includes('@')
        const passwordIsValid = password.length > 6;

        if(!emailIsValid || !passwordIsValid || (!isLogin))
            {
                Alert.alert('Hops!','Lütfen girdiğiniz değerleri kontrol ediniz!');
                setcredentialsInvalid({
                    email:!emailIsValid,
                    confirmEmail:!emailIsValid || !emailsAreEqual,
                    password:!passwordIsValid,
                    confirmPassword:!passwordIsValid || !passwordsAreEqual

                })
                return;
            }
            onAuthenticate({email,password})
    }
    return (
        <View style={styles.mainContainer}>
            <Image
                source={require('../assets/WhatsApp Image 2024-03-18 at 18.58.33 (1).jpeg')}
                style={styles.contentImage}
            />
            <View style={styles.backButton}>
                <Pressable
                style={({ pressed }) => pressed && styles.pressed}
                onPress={() => {
                navigation.navigate('WelcomeScreen');
                }}>
                    <AntDesign name="back" size={24} color="white" />
                </Pressable>
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.contentTitleContainer}>
                    <Text style={styles.contentTitleText}>Hoş Geldiniz</Text>
                </View>
            </View>
            <View style={styles.container}> 
                <AuthForm credentialsInvalid={credentialsInvalid} isLogin={isLogin} onsubmit={submitHandler}/>
            </View>
        </View>

  )
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal:30,
        marginTop:100,
        padding:15,
        borderRadius:20,
        borderColor:'#E7AF00',
        elevation:4,
        shadowColor:'black',
        shadowOffset:{width:1,height:2},
        shadowOpacity:0.5,
        shadowRadius:4,
    },
    mainContainer:{
        flex:1,
    },
    backButton:{
        marginTop:60,
        marginLeft:15,
      },
    contentContainer:{
        marginTop:30,
        alignItems:'center',
    },
    contentTitleContainer:{
        borderRadius:7,
        padding:10,
    },
    contentTitleText:{
        fontSize:24,
        color:'white',
        fontWeight:'bold'
    },
    contentImage:{
        width:'100%',
        height:'100%',
        position:'absolute'
      },
})