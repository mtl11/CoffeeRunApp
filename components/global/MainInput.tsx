import { TextInput, StyleSheet, Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default (props: any) => {
  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={() => {
        props.action();
      }}
    >
      <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    padding: 12,
    marginHorizontal: "8%",
    borderRadius: 8,
    marginTop: "7%",
    backgroundColor: "black",
  },
  buttonText: {
    fontFamily: "Rubik-Medium",
    color: "white",
    fontSize: 18,
  },
});
