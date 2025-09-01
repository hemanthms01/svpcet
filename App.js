/* import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
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
 */



import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Pages/Login";
import StaffAc from "./Pages/StaffAc";
import StdAc from "./Pages/StdAc";
import Home from "./Pages/Home";
import Splash from "./Pages/Splash";
import Register from "./Pages/Register";

export default function App()
{ 
  const Stack=createNativeStackNavigator();
  return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown:false}}>
      <Stack.Screen name="Splash" component={Splash}/>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="StaffAc" component={StaffAc}/>
      <Stack.Screen name="StdAc" component={StdAc}/>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Register" component={Register}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
  
}