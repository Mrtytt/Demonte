import { StyleSheet, Text, View,TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import Input from './Input'
import Button from './Button'
import { AntDesign } from '@expo/vector-icons';


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
        label="Email" 
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
        <View style={styles.buttons}>
          <Button onPress={submitHandler}>
            {'Giriş Yap'}
          </Button>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  buttons:{
    marginTop:10,
  },
})