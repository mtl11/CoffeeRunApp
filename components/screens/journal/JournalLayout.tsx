import React from "react";
import {
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
} from "react-native";
import NoAuthJournalMessage from "../../global/NoAuthMessage";
const JournalLayout = (props: any) => {
  return (
    <SafeAreaView style={styles.container}>
         {true ? <NoAuthJournalMessage/> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor:"#FFFFFF"
  }
});

export default JournalLayout;
