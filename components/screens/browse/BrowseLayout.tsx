import React, { useState } from "react";
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
  const [showList, setShowList] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
        <BrowseHeader showList={showList}action={setShowList}/>
        {showList ? <ListView/> : null}
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
