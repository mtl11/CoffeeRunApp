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
import HeaderSearchBar from "../../global/HeaderSearchBar";
import Feather from "@expo/vector-icons/Feather";
import FilterModal from "./FilterModal";
import Ionicons from '@expo/vector-icons/Ionicons';

const BrowseHeader = (props: any) => {
  // const [isOnMap, setIsOnMap] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [showFilterModal, setShowFilterModal] = useState(false);
  function updateSearch(text: string) {
    setSearchValue(text);
  }

  return (
    <View style={styles.container}>
      <FilterModal showFilterModal={showFilterModal} setShowFilterModal={setShowFilterModal}/>
      <View
        style={{
          alignItems: "center",
          marginBottom: "5%",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <HeaderSearchBar searchValue={searchValue} action={updateSearch} />
        <TouchableOpacity
          style={{
            backgroundColor: colors.buttonBackgroundSecondary,
            borderRadius: 12,
            height: 40,
            width: "10%",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "1%",
          }}
          onPress={() => {
            setShowFilterModal(true);
          }}
        >
          <Ionicons name="filter" size={20} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.pickerContainer}>
        <TouchableOpacity
          style={[
            props.showList
              ? styles.buttonBackgroundMain
              : styles.buttonBackgroundSecondary,
            { borderBottomLeftRadius: 8, borderTopLeftRadius: 8 },
          ]}
          onPress={() => {
            props.action(true);
          }}
        >
          <Text
            style={[
              props.showList
                ? global.buttonTextMain
                : global.buttonTextSecondary,
              { margin: 4 },
            ]}
          >
            List
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            !props.showList
              ? styles.buttonBackgroundMain
              : styles.buttonBackgroundSecondary,
            { borderBottomRightRadius: 8, borderTopRightRadius: 8 },
          ]}
          onPress={() => {
            props.action(false);
          }}
        >
          <Text
            style={[
              !props.showList
                ? global.buttonTextMain
                : global.buttonTextSecondary,
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
    marginBottom: "5%",
  },
  buttonBackgroundMain: {
    backgroundColor: colors.buttonBackgroundMain,
    width: "50%",
    alignItems: "center",
    height: 36,
    justifyContent: "center",
  },
  buttonBackgroundSecondary: {
    backgroundColor: colors.buttonBackgroundSecondary,
    width: "50%",
    alignItems: "center",
    height: 36,
    justifyContent: "center",
  },
});

export default BrowseHeader;
