import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import AuthTextInput from "../../../global/AuthTextInput";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Feather } from "@expo/vector-icons";
import { SvgXml } from "react-native-svg";
import GoBackButton from "../../../global/GoBackButton";
import MainInput from "../../../global/MainInput";

const SignupForm = (props: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordDontMatch, setPasswordDontMatch] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  async function authenticateHandler() {
    try {
      // const token = await authenticateUser(email, password);
      setPasswordDontMatch(false);
      // authCTX.authenticate(token);
      //   AsyncStorage.setItem("email", email);
      setIsAuth(false);
    } catch (error) {
      setPasswordDontMatch(true);
      setIsAuth(false);
    }
  }

  return (
    <KeyboardAwareScrollView scrollEnabled={false}>
      <View
        style={{ alignSelf: "center", alignItems: "center", margin: "2.5%" }}
      >
        <Feather name="coffee" size={44} color="grey" />
      </View>
      <View
        style={{ alignSelf: "center", alignItems: "center", margin: "2.5%" }}
      >
        <Text style={{ fontSize: 20 }}>Create an account</Text>
      </View>
      <View style={{ alignSelf: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 14 }}>
          Enter your email to sign up for CoffeeRun
        </Text>
      </View>
      <AuthTextInput
        placeholderText={"email@domain.com"}
        onChangeTextFunction={setEmail}
        isPassword={false}
      />
      <AuthTextInput
        placeholderText={"password"}
        onChangeTextFunction={setPassword}
        isPassword={true}
      />
      <MainInput action={() => {
          setIsAuth(true);
          authenticateHandler();
        }} text={"Sign up with Email"}/>
      <View style={{ opacity: 0.4, alignSelf: "center", marginTop: "7%" }}>
        <Text style={{ fontSize: 14 }}>- or -</Text>
      </View>
      <TouchableOpacity
        style={styles.googleButtonContainer}
        onPress={() => {
          setIsAuth(true);
          authenticateHandler();
        }}
      >
        {!isAuth ? (
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ marginHorizontal: 8 }}>
              <SvgXml xml='<svg enable-background="new 0 0 30 30" height="24" viewBox="0 0 48 48" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m43.611 20.083h-1.611v-.083h-18v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657c-3.572-3.329-8.35-5.382-13.618-5.382-11.045 0-20 8.955-20 20s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" fill="#ffc107"/><path d="m6.306 14.691 6.571 4.819c1.778-4.402 6.084-7.51 11.123-7.51 3.059 0 5.842 1.154 7.961 3.039l5.657-5.657c-3.572-3.329-8.35-5.382-13.618-5.382-7.682 0-14.344 4.337-17.694 10.691z" fill="#ff3d00"/><path d="m24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238c-2.008 1.521-4.504 2.43-7.219 2.43-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025c3.31 6.477 10.032 10.921 17.805 10.921z" fill="#4caf50"/><path d="m43.611 20.083h-1.611v-.083h-18v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571.001-.001.002-.001.003-.002l6.19 5.238c-.438.398 6.591-4.807 6.591-14.807 0-1.341-.138-2.65-.389-3.917z" fill="#1976d2"/></svg>' />
            </View>
            <Text style={styles.googleButtonText}>Continue with Google</Text>
          </View>
        ) : (
          <ActivityIndicator size={22} />
        )}
      </TouchableOpacity>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  welcomeContainer: {
    alignSelf: "center",
    marginBottom: "10%",
    marginTop: "10%",
  },
  image: {
    // alignSelf: "center",
    // marginTop: "30%",
    width: 125,
    height: 45,
    resizeMode: "contain",
    marginHorizontal: "1%",
  },
  container: {
    height: "100%",
  },
  buttonContainer: {
    alignItems: "center",
    padding: 10.5,
    marginHorizontal: "8%",
    borderRadius: 8,
    marginTop: "7%",
    backgroundColor: "black",
    borderWidth: 1.5,
  },
  googleButtonContainer: {
    alignItems: "center",
    padding: 10.5,
    marginHorizontal: "8%",
    borderRadius: 8,
    marginTop: "7%",
    backgroundColor: "white",
    borderWidth: 1.5,
  },
  buttonTextSignUp: {
    fontFamily: "Rubik-Medium",
    fontSize: 18,
  },
  buttonText: {
    fontFamily: "Rubik-Medium",
    color: "white",
    fontSize: 18,
  },
  googleButtonText: {
    fontFamily: "Rubik-Medium",
    color: "black",
    fontSize: 18,
  },
  newAccountContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "33%",
  },
  newAccountText: {
    fontFamily: "Rubik-Regular",
    fontSize: 18,
  },
});

export default SignupForm;
