import { StatusBar } from "expo-status-bar";
import { Button, Modal, StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import LoginLayout from "./components/screens/auth/login/LoginLayout";
import SignupLayout from "./components/screens/auth/signup/SignupLayout";

import TabNav from "./components/navigation/TabNav";
import ForgotPasswordLayout from "./components/screens/auth/forgotPassword/ForgotPasswordLayout";
import AuthContextProvider, { AuthContext } from "./store/authContext";
import CheckInBottomSheet from "./components/screens/checkIn/CheckInBottomSheet";
import CheckInLayout from "./components/screens/checkIn/CheckInLayout";

const Stack = createNativeStackNavigator();

function AuthenticatedStack(props: any) {
  const navigation = useNavigation();
  return (
    <>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={"TabNav"}
      >
        <Stack.Screen
          name="CheckInScreen"
          component={CheckInLayout}
          options={{
            headerShown: false,
            animation: "none",
          }}
        />
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
      <CheckInBottomSheet navigation={navigation}/>
    </>
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
  const authCTX = useContext(AuthContext);
  const [auth, setAuth] = useState(authCTX.isAuthenticated);

  useEffect(() => {
    async function checkAuthStatus() {
      setAuth(authCTX.isAuthenticated);
    }

    checkAuthStatus();
  }, [authCTX.isAuthenticated]);
  return (
    <NavigationContainer>
      {auth ? <AuthenticatedStack /> : <UnAuthenticatedStack />}
    </NavigationContainer>
  );
}

function Root() {
  const authCTX = useContext(AuthContext);
  const [isTryingToLogin, setIsTryingToLogin] = useState(false);

  useEffect(() => {
    async function fetchToken() {
      // const storedToken = await AsyncStorage.getItem("token");
      // const accessToken = await getAccessToken();
      // // (accessToken);
      // if (storedToken && accessToken) {
      //   authCTX.authenticate(storedToken);
      // } else {
      //   authCTX.logout();
      // }
      setIsTryingToLogin(false);
    }

    fetchToken();
  }, []);

  if (isTryingToLogin) {
    return null;
  }

  return <Navigation />;
}

function App() {
  let [fontsLoaded] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AuthContextProvider>
      <Root />
    </AuthContextProvider>
  );
}

export default App;
