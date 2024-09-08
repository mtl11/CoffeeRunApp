import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
} from "react-native";
import ForgotPasswordFrom from "./ForgotPasswordFrom";
import { useNavigation } from "@react-navigation/native";
import GoBackButton from "../../../global/GoBackButton";

const ForgotPasswordLayout = (props: any) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.formWrapper}>
          <View style={{ alignSelf: "flex-start", marginBottom: "25%" }}>
            <GoBackButton navigation={navigation} />
          </View>
          <ForgotPasswordFrom navigation={navigation} />
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#FFFFFF",
  },
  formWrapper: {
    justifyContent: "center",
    // marginTop: "25%",
  },
});

export default ForgotPasswordLayout;
