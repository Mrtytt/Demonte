import { StyleSheet, Text, View,TouchableOpacity,Pressable} from 'react-native'
import React,{useState} from 'react'
import Input from './Input'
import Button from './Button'


export default function AuthForm({isLogin,onsubmit,credentialsInvalid}) {

  const [enteredEmail, setEnteredEmail] = useState('')
  const [enteredPassword, setEnteredPassword] = useState('')
  
  const {
    email:emailIsInvalid,
    password:passwordIsInvalid,
  }=credentialsInvalid

  function submitHandler(){
    onsubmit({
      email:enteredEmail,
      password:enteredPassword,
    })
  }

  function updateInput(inputType,enteredValue){
    switch(inputType)
    {
      case 'email':
        setEnteredEmail(enteredValue)
        break
      case 'password':
        setEnteredPassword(enteredValue)
        break
    }
  }
  return (
    <View>
        <Input 
          label="E-Posta" 
          keyboardType="email-address"
          onUpdateValue={updateInput.bind(this,'email')}
          value={enteredEmail}
          isInvalid={emailIsInvalid}/>
        <Input 
          label="Şifre" 
          secure
          onUpdateValue={updateInput.bind(this,'password')}
          value={enteredPassword}
          isInvalid={passwordIsInvalid}/>
        <View style={styles.forgotPasswordContainer}>
          <Text style={styles.forgotPasswordText}>Şifremi Unuttum</Text>
        </View>
        <Pressable
          style={({ pressed }) => pressed && styles.pressed}
          onPress={() => {
            navigation.navigate('LoginScreen');
        }}>
          <View style={styles.buttons}>
            <Button onPress={submitHandler}>
              {'Giriş Yap'}
            </Button>
          </View>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  buttons:{
    marginTop:10,
  },
  forgotPasswordContainer:{
    marginTop:15,
    marginBottom:15,
    alignItems:'center',
  },
  forgotPasswordText:{
    color:'yellow',
  },
  pressed:{
    opacity:0.5,
  }
})