import { SetStateAction } from "react";
import { TextInput, StyleSheet, View } from "react-native";

export default (props: { placeholderText: string, onChangeTextFunction: any}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        autoCapitalize={"none"}
        style={styles.input}
        placeholder={props.placeholderText}
        onChangeText={props.onChangeTextFunction}
        autoCorrect={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    paddingVertical: "5%",
    marginHorizontal: "5%",
    fontSize: 16,
    fontFamily: "Rubik-Regular",
  },
  inputContainer: {
    borderRadius: 12,
    marginHorizontal: "8%",
    marginTop: "5%",
    backgroundColor: "white"
  },
});
