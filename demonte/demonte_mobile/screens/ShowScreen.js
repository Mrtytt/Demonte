import { StyleSheet, Text, View,TouchableOpacity,Image} from 'react-native'
import React,{useContext,useEffect}from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Context } from '../context/Context'

export default function ModelScreen({navigation,route}) {
  const {state} = useContext(Context)
  const model = state.find((model) => model.id === route.params.id)
  useEffect(() => {
    fetchImages();
  }, [state]);
  
  const fetchImages = async () => {
    const imagePromises = state.map(async (item) => {
      const dataURL = await toDataURL(item.imageUrl);
      return { id: item.id, dataURL };
    });

    const imageDataArray = await Promise.all(imagePromises);
  };
  async function toDataURL(url) {
    return new Promise((resolve, reject) => {
      var xhr = new XMLHttpRequest();
  
      xhr.onload = function () {
        var reader = new FileReader();
        reader.onloadend = function () {
          resolve(reader.result);
        };
        reader.readAsDataURL(xhr.response);
      };
  
      xhr.onerror = function () {
        reject(new Error('Failed to fetch data from the URL.'));
      };
  
      xhr.open('GET', url);
      xhr.responseType = 'blob';
      xhr.send();
    });
  }
  return (
    <View style={styles.mainContainer}>
      <View style={styles.backContainer}>
        <View style={styles.backButton}>
          <TouchableOpacity
            onPress={() => {
              navigation.pop();
            }}
          >
            <AntDesign name="back" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{uri:model.imageUrl}}
            />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{model.carName}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer:{
    flex:1
  },
  backContainer:{
    marginTop:60,
    marginLeft:15,
  },
  contentContainer:{
    height:'80%',
  },
  imageContainer:{
    height:'30%',
    marginLeft:5,
    marginRight:5,
    padding:2,
    marginTop:10,
    backgroundColor:'white',
    borderRadius:10,
  },
  image:{
    height:'100%',
    width:'100%',
  },
  titleContainer:{
    marginTop:15,
    marginLeft:15,
    marginRight:15,
    borderWidth:1,
    borderRadius:10,
    alignItems:'center',
    padding:5,
    backgroundColor:'#000230'
  },
  titleText:{
    fontSize:16,
    color:'white',
  }
})