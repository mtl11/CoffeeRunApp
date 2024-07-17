import React from "react";
import {
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const NoAuthJournalMessage = (props: any) => {
  return (
    <View style={styles.container}>
      <View style={{alignSelf:"center", alignItems:"center"}}>
        <Feather name="coffee" size={44} color="grey" />
        {/* <Text>Login in or Sign Up</Text> */}
      </View>

      <TouchableOpacity style={[styles.buttonContainer,{backgroundColor:"white", borderColor:"black"}]} onPress={() => {}}>
        <Text style={[styles.buttonText, {color: "black"}]}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer} onPress={() => {}}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    marginTop: "50%"
  },
  buttonContainer: {
    alignItems: "center",
    padding: 16,
    marginHorizontal: "8%",
    borderRadius: 12,
    marginTop: "7%",
    backgroundColor: "black",
    borderWidth:1.5
  },
  buttonText: {
    fontFamily: "Rubik-Medium",
    color: "white",
    fontSize: 18,
  },
});

export default NoAuthJournalMessage;
