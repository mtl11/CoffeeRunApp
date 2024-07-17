import React from "react";
import {
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const NoAuthCheckIn = (props: any) => {
  return (
    <View>
        <View>
            <Feather name="coffee" size={24} color="black" />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor:"#FFFFFF"
  }
});

export default NoAuthCheckIn;
