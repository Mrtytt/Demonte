import { StyleSheet, Text, View,Alert} from 'react-native'
import React,{useState,useContext}from 'react'
import { login } from '../util/auth'
import { AuthContext } from '../store/auth-context'
import AuthContent from '../components/AuthContent'
import Loading from '../components/Loading'

export default function LoginScreen({navigation}) {
  const [isAuthenticating, setIsAuthenticating] = useState(false)
  const authContext=useContext(AuthContext)

  async function loginHandler({email,password}){
    setIsAuthenticating(true)
    try {
      const token = await login(email,password)
      authContext.authenticate(token)
    } catch (error) {
      Alert.Alert('Kayıt Olunamadı!','lütfen bilgilerinizi kontrol ediniz')
    }
    setIsAuthenticating(false)
  }
  if(isAuthenticating){
    return <Loading message='Giriş Yapılıyor...'/>
  }
  return (
    <AuthContent isLogin onAuthenticate={loginHandler}/>
  )
}

const styles = StyleSheet.create({})