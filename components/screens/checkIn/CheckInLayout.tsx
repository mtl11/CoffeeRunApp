import React from "react";
import {
  SafeAreaView,
  StyleSheet,
} from "react-native";

import NoAuthMessage from "../../global/NoAuthMessage";
const CheckInLayout = (props: any) => {
  
  return (
    <SafeAreaView style={styles.container}>
      {/* {true ? <NoAuthMessage /> : null} */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#FFFFFF",
  },
});

export default CheckInLayout;
