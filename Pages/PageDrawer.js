import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Home from "./Home";
import Attendance from "./Attendance";
import Profile from "./Profile";

const style = StyleSheet.create({
  top: {
    transform: [{ translateY: -15 }], // ✅ FIXED
    backgroundColor: "#222",
    width: "220%",
    height: "220%",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});

const Tab = createBottomTabNavigator();

export default function PageDrawer() {
  return (
    <SafeAreaProvider>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          headerShown: false,
          tabBarActiveTintColor: "#fff",
          tabBarInactiveTintColor: "#fff",
          tabBarStyle: [{ backgroundColor: "#222" }],
          tabBarIcon: ({ color, size, focused }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            }
            if (route.name === "Attendance") {
              iconName = focused ? "newspaper-sharp" : "newspaper-outline";
            }
            if (route.name === "Profile") {
              iconName = focused ? "person-circle" : "person-circle-outline";
            }

            return (
              <View style={[focused && style.top]}>
                <Ionicons
                  name={iconName}
                  color="#fff"
                  size={focused ? 40 : 30}
                />
              </View>
            );
          },
        })}
        initialRouteName="Home"
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Attendance" component={Attendance} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </SafeAreaProvider>
  );
}
