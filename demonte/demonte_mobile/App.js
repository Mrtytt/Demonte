import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image} from 'react-native';
import AuthContextProvider, { AuthContext } from './store/auth-context';
import { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import MyCarScreen from './screens/MyCarScreen';
import HomeScreen from './screens/HomeScreen';
import OtherServicesScreen from './screens/OtherServicesScreen';
import ServiceScreen from './screens/ServiceScreen';
import OtherScreen from './screens/OtherScreen';
import UserScreen from './screens/UserScreen';
import { Provider } from './context/Context';

import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import PriceList from './screens/PriceList';
import OffersScreen from './screens/OffersScreen';
import ModelsScreen from './screens/ModelsScreen';
import MainServiceScreen from './screens/MainServiceScreen';
import OnlineServiceDate from './screens/OnlineServiceDate';
import EditServiceScreen from './screens/EditServiceScreen';
import ServiceHistoryScreen from './screens/ServiceHistoryScreen';
import ServiceOffersScreen from './screens/ServiceOffersScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Login(){
  return(
    <Stack.Navigator>
      <Stack.Screen
        name='WelcomeScreen'
        component={WelcomeScreen}
        options={{headerShown:false}}
      />
      <Stack.Screen
        name='LoginScreen'
        component={LoginScreen}
        options={{headerShown:false}}
      />
    </Stack.Navigator>
  )
}

function Navigation(){
  const authContext = useContext(AuthContext)
  return(
    <NavigationContainer>
      {!authContext.isAuthenticated && <Login/>}
      {authContext.isAuthenticated && <DemonteApp/>}
    </NavigationContainer>
  )
}

function DemonteApp(){
  return(
    <Stack.Navigator>
      <Stack.Screen
        name='DemonteOverview'
        component={DemonteOverview}
        options={{headerShown:false}}
      />
      <Stack.Screen
        name='UserScreen'
        component={UserScreen}
        options={{headerShown:false}}
      />
      <Stack.Screen
        name='OtherServicesScreen'
        component={OtherServicesScreen}
        options={{headerShown:false}}
      />
      <Stack.Screen
        name='OffersScreen'
        component={OffersScreen}
        options={{headerShown:false}}
      />
      <Stack.Screen
        name='ModelsScreen'
        component={ModelsScreen}
        options={{headerShown:false}}
      />
      <Stack.Screen
        name='MainServiceScreen'
        component={MainServiceScreen}
        options={{headerShown:false}}
      />
      <Stack.Screen
        name='OnlineServiceDate'
        component={OnlineServiceDate}
        options={{headerShown:false}}
      />
      <Stack.Screen
        name='EditServiceScreen'
        component={EditServiceScreen}
        options={{headerShown:false}}
      />
      <Stack.Screen
        name='ServiceHistoryScreen'
        component={ServiceHistoryScreen}
        options={{headerShown:false}}
      />
      <Stack.Screen
        name='ServiceOffersScreen'
        component={ServiceOffersScreen}
        options={{headerShown:false}}
      />
    </Stack.Navigator>
  )
}

function DemonteOverview(){
  const authContext = useContext(AuthContext)
  return(

      <Tab.Navigator
      screenOptions={{
        headerShown:false,
        tabBarShowLabel:false
      }}
      >
      <Tab.Screen
      name="Demonte" 
      component={HomeScreen} 
      options={{
        tabBarIcon: () => (
          <Image
            style={styles.icon}
            source={require('./assets/WhatsApp Image 2024-02-24 at 16.13.13.jpeg')}
          />
        ),
      }}  
      />
    <Tab.Screen 
      name="MyCar" 
      component={MyCarScreen} 
      options={{
        title: 'Aracım',
        tabBarIcon: ({ color, size }) => (
          <FontAwesome5 name="caravan" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen 
      name="Services" 
      component={ServiceScreen}
      options={{
        title: 'Servis',
        tabBarIcon: ({ color, size }) => (
          <FontAwesome5 name="wrench" size={size} color={color} />
        ),
        headerShown:true
      }}
    />
    <Tab.Screen 
      name="PriceList" 
      component={PriceList}
      options={{
        title: 'Fiyat Listesi',
        tabBarIcon: ({ color, size }) => (
          <Feather name="list" size={size} color={color} />
        ),
        headerShown:true
      }}
    />
    <Tab.Screen 
      name="Other" 
      component={OtherScreen}
      options={{
        title: 'Diğer',
        tabBarIcon: ({ color, size }) => (
          <Entypo name="dots-three-horizontal" size={size} color={color} />
        ),
        headerShown:true
      }}
    />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <AuthContextProvider>
      <Provider>
        <Navigation>
        
        </Navigation>
      </Provider>
    </AuthContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon:{
    height:25,
    width:25,
  }
});
