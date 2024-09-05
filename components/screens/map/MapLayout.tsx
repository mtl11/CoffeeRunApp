import React from "react";
import {
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
} from "react-native";
import NoAuthMessage from "../../global/NoAuthMessage";

const MapLayout = (props: any) => {
  return (
    <SafeAreaView style={styles.container}>
         {/* {true ? <NoAuthMessage/> : null} */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor:"#FFFFFF"
  }
});

export default MapLayout;
