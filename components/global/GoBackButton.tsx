import { TextInput, StyleSheet, Text, TouchableOpacity } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
export default (props: any) => {
  return (
    <TouchableOpacity style={styles.inputContainer} onPress={()=>{
        props.navigation.goBack();
    }}>
     <Ionicons name="arrow-back" size={30} color="black" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 14,
    fontFamily: "Rubik-Medium",
  },
  inputContainer: {
    marginHorizontal: "5%",
    backgroundColor: "white",
    flexDirection: "row",
    alignItems:"center"
  },
});
