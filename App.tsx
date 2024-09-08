import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import LoginLayout from "./components/screens/auth/login/LoginLayout";
import SignupLayout from "./components/screens/auth/signup/SignupLayout";

import { Header } from "react-native/Libraries/NewAppScreen";
import TabNav from "./components/navigation/TabNav";
import ForgotPasswordLayout from "./components/screens/auth/forgotPassword/ForgotPasswordLayout";

const Stack = createNativeStackNavigator();

function AuthenticatedStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={"TabNav"}
    >
      <Stack.Screen
        name="TabNav"
        component={TabNav}
        options={{
          headerShown: false,
          animation: "none",
          gestureEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
}

function UnAuthenticatedStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={"LoginScreen"}
    >
      <Stack.Screen
        name="LoginScreen"
        component={LoginLayout}
        options={{ navigationBarHidden: true }}
      />
      <Stack.Screen
        name="SignupScreen"
        component={SignupLayout}
        options={{ navigationBarHidden: true }}
      />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordLayout}
        options={{ navigationBarHidden: true }}
      />
    </Stack.Navigator>
  );
}

function Navigation() {
  const auth = false;
  return (
    <NavigationContainer>
      {auth ? <AuthenticatedStack /> : <UnAuthenticatedStack />}
    </NavigationContainer>
  );
}

function Root() {
  return <Navigation />;
}

function App() {
  return <Root />;
}

export default App;
