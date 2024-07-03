import React from "react";
import {
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
} from "react-native";
import LoginForm from "./LoginForm";

const LoginLayout = (props: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.formWrapper}>
          <LoginForm/>
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
