import { TextInput, StyleSheet, Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import global from "../../styles/texts";

export default (props: any) => {
  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={() => {
        props.action();
      }}
    >
      <Text style={global.buttonTextMain}>{props.text}</Text>
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
  }
});
