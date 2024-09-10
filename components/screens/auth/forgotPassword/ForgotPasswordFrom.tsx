import React, { useCallback, useState } from "react";
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
import MainInput from "../../../global/MainInput";
import global from "../../../../styles/texts";

const ForgotPasswordFrom = (props: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordDontMatch, setPasswordDontMatch] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [visible, setVisible] = useState(true);

  async function authenticateHandler() {
    try {
      console.log("pressed");
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
        <Text style={global.headingText}>Reset Password</Text>
        <Text style={global.bodyText}>
          Enter an email associated with your account.
        </Text>
      </View>
      <AuthTextInput
        placeholderText={"email@domain.com"}
        onChangeTextFunction={setEmail}
        isPassword={false}
      />
      <MainInput
        action={() => {
          setIsAuth(true);
          authenticateHandler();
        }}
        text={"Send"}
      />
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
  buttonContainer: {
    alignItems: "center",
    padding: 12,
    marginHorizontal: "8%",
    borderRadius: 8,
    marginTop: "7%",
    backgroundColor: "black",
  },
  newAccountContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "33%",
  },
});

export default ForgotPasswordFrom;
