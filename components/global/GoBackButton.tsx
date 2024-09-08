import { TextInput, StyleSheet, Text, TouchableOpacity } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
export default (props: any) => {
  return (
    <TouchableOpacity style={styles.inputContainer} onPress={()=>{
        props.navigation.goBack();
    }}>
     <Ionicons name="chevron-back" size={24} color="black" />
     <Text style={styles.input}>
        Back
     </Text>
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
