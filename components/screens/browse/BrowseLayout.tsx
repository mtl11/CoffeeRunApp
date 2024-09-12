import React from "react";
import {
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
} from "react-native";
import NoAuthMessage from "../../global/NoAuthMessage";
import BrowseHeader from "./BrowseHeader";
import ListView from "./ListView";
const BrowseLayout = (props: any) => {
  return (
    <SafeAreaView style={styles.container}>
        <BrowseHeader/>
        <ListView/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor:"#FFFFFF"
  }
});

export default BrowseLayout;
