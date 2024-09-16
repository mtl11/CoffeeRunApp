import { TextInput, StyleSheet, View } from "react-native";
import colors from "../../styles/colors";
import { SearchBar } from "react-native-elements";
import global from "../../styles/texts";
import EvilIcons from '@expo/vector-icons/EvilIcons';
export default (props) => {
  return (
    <SearchBar
      autoCorrect={false}
      onFocus={() => {
        // setShowSearchList(true);
      }}
      onBlur={() => {
        // setShowSearchList(false);
      }}
      onChangeText={(text)=>{props.action(text)}}
      value={props.searchValue}
      containerStyle={styles.searchContainer}
      inputContainerStyle={{
        backgroundColor: colors.buttonBackgroundSecondary,
        borderRadius: 12,
        height: 40
      }}
      inputStyle={global.bodyText}
      placeholder={"Search"}
      searchIcon={<EvilIcons name="search" size={24} color="black" />}
      lightTheme={true}
      round={true}
      showCancel={true}
    />
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    width: "81%",
    // marginLeft: "3%",
    padding: 0,
    borderBottomWidth: 0,
    borderTopWidth: 0,
    backgroundColor: "white",
   
  },
});
