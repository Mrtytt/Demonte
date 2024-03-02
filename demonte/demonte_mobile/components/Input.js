import { StyleSheet, Text, View,TextInput} from 'react-native'
import React from 'react'

export default function Input({label,keyboardType,onUpdateValue,value,secure,isInvalid}) {
  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.label,isInvalid && styles.labelInvalid]}>{label}</Text>
      <TextInput
        style={[styles.input,isInvalid && styles.inputInvalid]}
        autoCapitalize='none'
        keyboardType={keyboardType}
        onChangeText={onUpdateValue}
        value={value}
        secureTextEntry={secure}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    inputContainer:{
        marginVertical:8,
    },
    label:{
        color:'#6A6A6A',
        marginBottom:5,
    },
    labelInvalid:{
      color:'red'
    },
    input:{
        backgroundColor:'#EAEAEA',
        paddingVertical:8,
        paddingHorizontal:10,
        borderRadius:20,
        fontSize:16,
    },
    inputInvalid:{
      backgroundColor:'red'
    }
})