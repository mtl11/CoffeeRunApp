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

const ForgotPasswordFrom = (props: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordDontMatch, setPasswordDontMatch] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [visible, setVisible] = useState(true);

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
      <View style={{ alignSelf: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 20 , marginBottom:8}}>
          Reset Password
        </Text>
        <Text style={{ fontSize: 12 }}>
          Enter an email associated with your account.
        </Text>
      </View>
      <AuthTextInput
        placeholderText={"email@domain.com"}
        onChangeTextFunction={setEmail}
        isPassword={false}
      />
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => {
          setIsAuth(true);
          authenticateHandler();
        }}
      >
        <Text style={styles.buttonText}>Send</Text>
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
  forgotPasswordContainer: {
    alignSelf: "flex-end",
    marginHorizontal: "8%",
    marginTop: 10,
    marginBottom: 20,
  },
  container: {
    height: "100%",
  },
  forgotPasswordText: {
    fontFamily: "Rubik-Medium",
    fontSize: 16,
  },
  buttonContainer: {
    alignItems: "center",
    padding: 12,
    marginHorizontal: "8%",
    borderRadius: 8,
    marginTop: "7%",
    backgroundColor: "black",
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

export default ForgotPasswordFrom;
