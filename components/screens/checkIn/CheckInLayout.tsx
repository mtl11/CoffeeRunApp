import React from "react";
import {
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  ScrollView,
} from "react-native";

import NoAuthCheckIn from "./NoAuthCheckIn";
const CheckInLayout = (props: any) => {
    const check = false;
  return (
    <SafeAreaView style={styles.container}>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor:"#FFFFFF"
  }
});

export default CheckInLayout;
