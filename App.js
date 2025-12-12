import 'react-native-get-random-values';
import 'react-native-url-polyfill/auto';

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Login from "./Pages/Login";
import StudentPG from './Pages/StudentPG';
import StaffAc from "./Pages/StaffAc";
import Splash from "./Pages/Splash";
import Register from "./Pages/Register";
import EnterRollNo from './Pages/EnterRollNo';
import OtpScreen from './Pages/OtpPage';
import PageDrawer from './Pages/PageDrawer';
import Profile from './Pages/Profile';
import AttendanceView from './Pages/AttendanceView';
import Attendance from './Pages/Attendance';
import StdAc from "./Pages/StdAc";
import Home from "./Pages/Home";
import ChatScreen from './Pages/Chat';
import StudentPG from './Pages/StudentPG';

//import { Amplify } from 'aws-amplify';
//import awsconfig from './src/aws-exports';

//Amplify.configure(awsconfig);

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="StaffAc" component={StaffAc} />
          <Stack.Screen name="StdAc" component={StdAc} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="OtpScreen" component={OtpScreen} />
          <Stack.Screen name="PageDrawer" component={PageDrawer} />
          <Stack.Screen name="Attendance" component={Attendance} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="StudentPG" component={StudentPG} />
          <Stack.Screen name="AttendanceView" component={AttendanceView} />
          <Stack.Screen name="EnterRollNo" component={EnterRollNo}/>
          <Stack.Screen name="ChatScreen" component={ChatScreen}/>
          <Stack.Screen name='StudentPG' component={StudentPG}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
