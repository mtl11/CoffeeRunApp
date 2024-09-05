import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
} from "react-native";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const LoginLayout = (props: any) => {
  const [isSignup, setIsSignup] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.formWrapper}>
          {isSignup ? <SignupForm/> : <LoginForm/>}
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor:"#FFFFFF"
  },
  formWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "25%",
  },
});

export default LoginLayout;
