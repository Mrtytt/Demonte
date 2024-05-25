import { StyleSheet, View, Text, Platform,Pressable, TextInput, TouchableOpacity} from 'react-native'
import React,{useState,useContext} from 'react'
import { AntDesign } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Context } from '../context/Context'


export default function AddAppointment({navigation,initialValues,onSubmit}) {
  const [date,setDate] = useState(initialValues ? initialValues.date:new Date());
  const [note,setNote] = useState(initialValues ? initialValues.note:'');

  const [showPicker,setShowPicker] = useState(false);

  const {addAppointment} = useContext(Context)

  const toggleDatePicker = () => {
    setDate(new Date())
    setShowPicker(!showPicker)
  };

  const onChange = ({type},selectedDate) => {
    if(type == "set"){
      const currentDate = selectedDate
      setDate(currentDate)
    }else{
      toggleDatePicker()
    }
  };
  const formatDate = (rawDate) => {
    let date = new Date(rawDate)

    let year = date.getFullYear();
    let month = date.getMonth() + 1
    let day = date.getDate()

    month = month < 10 ? `0${month}` : month
    day = day < 10 ? `0${day}` : day

    let returnDate = `${day}.${month}.${year}`
    return returnDate
  }
  const confirmDate =()=>{
    setDate(formatDate(date))
    setShowPicker(!showPicker)
  }
  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleContainerText}>{initialValues? 'Servis Randevusu Güncelle':'Servis Randevusu'}</Text>
      </View>
      <View style={styles.dateTimePickerContainer}>
        <Text style={styles.label}>Not</Text>
        <TextInput 
          style={styles.input}
          value={note}
          onChangeText={(text) => setNote(text)}
        />
      </View>
      <View style={styles.dateTimePickerContainer}>
        <Text style={styles.label}>Tarih</Text>
        {showPicker &&(
          <DateTimePicker
            mode='date'
            display='spinner'
            value={date}
            onChange={onChange}
            style={styles.datePicker}
            locale='tr-TR'
          />
        )}
        {showPicker && Platform.OS ==="ios" && (
          <View
          style={{flexDirection:"row",
          justifyContent:"space-around"}}
          >
            <TouchableOpacity style={[
              styles.button,
              styles.pickerButton,
              {backgroundColor:"#11182711"}
            ]}
              onPress={toggleDatePicker}
            >
              <Text style={[
                styles.buttonText,
                {color:"#075985"}
              ]}
              >İptal Et</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[
              styles.button,
              styles.pickerButton,
            ]}
              onPress={confirmDate}
            >
              <Text style={[
                styles.buttonText,
              ]}
              >Kaydet</Text>
            </TouchableOpacity>
          </View>
        )}
        {!showPicker && (
          <View styles={styles.setDateContainer}>
          <Pressable
            onPress={toggleDatePicker}
          >
            <TextInput
              style={styles.input}
              placeholder='21.05.2024'
              value={date}
              onChangeText={setDate}
              placeholderTextColor="#11182744"
              editable={false}
              onPressIn={toggleDatePicker}
            />
          </Pressable>
          </View>
        )}
      </View>
      <View>
        <TouchableOpacity 
          style={styles.buttonMain} 
          onPress={() =>{onSubmit(date,note)}}
        >
          <View style={styles.buttonView}>        
            <Text style={styles.buttonText}>{initialValues? 'Güncelle':'Kaydet'}</Text>
          </View>
        </TouchableOpacity>
      </View>
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
    getDataContainer:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginHorizontal:10,
      marginVertical:15,

    },
    inputContainer:{
      width:'100%',
      marginRight:5,
    },
    titleContainer:{
      marginHorizontal:15,
      padding:5,
      borderRadius:10,
      backgroundColor:'#6A6A6A',
      marginVertical:20,
    },
    titleContainerText:{
      textAlign:'center',
      fontSize:16,  
      color:'white'
    },
    datePicker:{
      height:120,
      marginTop:-10,
    },
    pickerButton:{
      paddingHorizontal:20,
    },
    button:{
      height:50,
      justifyContent:"center",
      alignItems:"center",
      borderRadius:50,
      marginTop:10,
      marginBottom:15,
      backgroundColor:"#075985",
      borderWidth:1,
    },
    buttonText:{
      fontSize:14,
      fontWeight:"500",
      color:"#fff",
    },
    label:{
      fontSize:18,
      marginBottom:5,
      color:"#E7AF00"
    },
    input:{
      backgroundColor:'#EAEAEA',
      paddingVertical:8,
      paddingHorizontal:10,
      borderRadius:20,
      fontSize:16,
      marginBottom:10,
    },
    dateTimePickerContainer:{
      marginHorizontal:10,
    },
    buttonMain:{
      padding:10,
      marginBottom:50,
    },
    buttonView:{
      backgroundColor:'#E7AF00',
      padding:5,
      alignItems:'center',
      justifyContent:'center',
      borderRadius:20,
      width:'50%',
      marginLeft:90,
    },
    buttonText:{
      color:'white',
      fontSize:20,
    },
})