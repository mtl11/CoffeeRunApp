import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React from 'react';
import LoginLayout from './components/screens/auth/login/LoginLayout';
const Stack = createNativeStackNavigator();

function AuthenticatedStack() {
  return (
      <Stack.Navigator >
        <Stack.Screen          
          name='LoginScreen'
          component={LoginLayout}
        />
      </Stack.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <AuthenticatedStack />
    </NavigationContainer>
  );
}

function Root() {
  return <Navigation />;
}

function App() {
  return (
    <Root />
  );
}

export default App;
