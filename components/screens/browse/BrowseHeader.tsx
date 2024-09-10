import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  TextInput,
} from "react-native";
import global from "../../../styles/texts";
import colors from "../../../styles/colors";
import { SearchBar } from "react-native-elements";

const BrowseHeader = (props: any) => {
  const [isOnMap, setIsOnMap] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  function updateSearch(text: string) {
    setSearchValue(text);
  }

  return (
    <View style={styles.container}>
      <View style={{ alignContent: "center" }}>
        {/* <TextInput
          autoCorrect={false}
          placeholderTextColor={colors.placeHolderTextColor}
          placeholder={"Search"}
          style={{
            borderWidth: 1,
            borderColor: colors.buttonBackgroundMain,
            // marginHorizontal:"10%",
            marginVertical:"2%",
            padding: 6,
            borderRadius:8
            
          }}
        ></TextInput> */}
        {/* <SearchBar
          autoCorrect={false}
          onFocus={() => {
            // setShowSearchList(true);
          }}
          onBlur={() => {
            // setShowSearchList(false);
          }}
          platform="ios"
          // onChangeText={updateSearch}
          value={searchValue}
          containerStyle={styles.searchContainer}
          inputContainerStyle={{
            // backgroundColor: colors.buttonBackgroundSecondary,
            borderColor: "blue",
            borderRadius: 12,
          }}
          inputStyle={{
            fontSize: 16,
            color: colors.inputColor,
            fontFamily: "Rubik-Regular",
          }}
          placeholder={"Search"}
          clearIcon={undefined}
          searchIcon={undefined}
          loadingProps={undefined}
          showLoading={false}
          onClear={undefined}
          onCancel={undefined}
          lightTheme={false}
          round={false}
          cancelButtonTitle={""}
          cancelButtonProps={undefined}
          showCancel={false}
        /> */}
      </View>

      <View style={styles.pickerContainer}>
        <TouchableOpacity
          style={[
            !isOnMap
              ? styles.buttonBackgroundMain
              : styles.buttonBackgroundSecondary,
            { borderBottomLeftRadius: 8, borderTopLeftRadius: 8 },
          ]}
          onPress={() => {
            setIsOnMap(false);
          }}
        >
          <Text
            style={[
              !isOnMap ? global.buttonTextMain : global.buttonTextSecondary,
              { margin: 4 },
            ]}
          >
            List
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            isOnMap
              ? styles.buttonBackgroundMain
              : styles.buttonBackgroundSecondary,
            { borderBottomRightRadius: 8, borderTopRightRadius: 8 },
          ]}
          onPress={() => {
            setIsOnMap(true);
          }}
        >
          <Text
            style={[
              isOnMap ? global.buttonTextMain : global.buttonTextSecondary,
              { margin: 4 },
            ]}
          >
            Map
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    width: "80%",
    marginLeft: "3%",
    padding: 0,
    borderBottomWidth: 0,
    borderTopWidth: 0,
    // backgroundColor: colors.buttonBackgroundSecondary,
  },
  container: {
    backgroundColor: "#FFFFFF",
  },
  pickerContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "92%",
    // borderWidth: 1,
    alignSelf: "center",
    borderRadius: 8,
  },
  buttonBackgroundMain: {
    backgroundColor: colors.buttonBackgroundMain,
    width: "50%",
    alignItems: "center",
  },
  buttonBackgroundSecondary: {
    backgroundColor: colors.buttonBackgroundSecondary,
    width: "50%",
    alignItems: "center",
  },
});

export default BrowseHeader;
