import { TextInput, StyleSheet, View } from "react-native";
import global from "../../styles/texts";
import colors from "../../styles/colors";
export default (props: { placeholderText: string, onChangeTextFunction: any}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        autoCapitalize={"none"}
        style={[styles.input,global.placeholderText]}
        placeholder={props.placeholderText}
        onChangeText={props.onChangeTextFunction}
        autoCorrect={false}
        placeholderTextColor={colors.placeHolderTextColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: "4%",
    borderWidth: 1,
    borderColor: colors.inputColor,
    borderRadius: 8,
  },
  inputContainer: {
    borderRadius: 8,
    marginHorizontal: "8%",
    marginTop: "5%",
    backgroundColor: "white"
  },
});
