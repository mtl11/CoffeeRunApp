import { StatusBar } from "expo-status-bar";
import { Button, Modal, StyleSheet, Text, View } from "react-native";
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
import AuthContextProvider, { AuthContext } from "./store/authContext";

const Stack = createNativeStackNavigator();

function AuthenticatedStack(props: any) {
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
      <Modal
        animationType="slide"
        transparent={true}
        visible={authCTX.showCheckInModal}
        onRequestClose={()=>{authCTX.toggleCheckInModal(false)}}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <View
            style={{
              width: 300,
              padding: 20,
              backgroundColor: "white",
              borderRadius: 10,
              alignItems: "center",
            }}
          >
            <Text>Settings Modal</Text>
            <Button title="Close Modal" onPress={()=>{authCTX.toggleCheckInModal(false)}} />
          </View>
        </View>
      </Modal>
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
