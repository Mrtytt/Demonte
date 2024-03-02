import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AuthContextProvider, { AuthContext } from './store/auth-context';
import { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';

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
    </NavigationContainer>
  )
}

export default function App() {
  return (
    <AuthContextProvider>
        <Navigation>
      
        </Navigation>
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
});
