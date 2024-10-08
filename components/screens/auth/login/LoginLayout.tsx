import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
} from "react-native";
import LoginForm from "./LoginForm";
import { useNavigation } from '@react-navigation/native';

const LoginLayout = (props: any) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.formWrapper}>
            <LoginForm navigation={navigation}/>
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
