import { SetStateAction } from "react";
import { TextInput, StyleSheet, View } from "react-native";

export default (props: { placeholderText: string, onChangeTextFunction: any, isPassword: boolean}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        autoCapitalize={"none"}
        style={styles.input}
        placeholder={props.placeholderText}
        onChangeText={props.onChangeTextFunction}
        autoCorrect={false}
        placeholderTextColor={"#828282"}
        secureTextEntry={props.isPassword}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: "4%",
    fontSize: 16,
    fontFamily: "Rubik-Regular",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 12,
    
  },
  inputContainer: {
    borderRadius: 12,
    marginHorizontal: "8%",
    marginTop: "5%",
    backgroundColor: "white"
  },
});
