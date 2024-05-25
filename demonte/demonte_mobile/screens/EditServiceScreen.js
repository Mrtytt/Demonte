import { StyleSheet, Text, View,Pressable,TouchableOpacity} from 'react-native'
import React,{useContext} from 'react'
import { Context } from '../context/Context';
import AddAppointment from '../components/AddAppointment'
import { AntDesign } from '@expo/vector-icons';

export default function EditServiceScreen({route,navigation}) {
  const {state,editAppointment} = useContext(Context)
  const model = state.find((model) => model.id === route.params.id)

  return (
    <View style={styles.mainContainer}>
        <View style={styles.backButton}>
          <TouchableOpacity
            onPress={() => {
              navigation.pop();
            }}
          >
            <AntDesign name="back" size={24} color="black" />
          </TouchableOpacity>
        </View>
      <AddAppointment 
        initialValues={{date:model.date,note:model.note}}
        onSubmit={(date,note) =>{
          editAppointment(model.id,date,note,()=>navigation.navigate('Demonte'))
      }}/>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor:'white',
  },  
  backButton:{
      marginTop:60,
      marginLeft:15,
  },
})