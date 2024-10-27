import React from "react";
import {
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  Image,
  Text,
} from "react-native";
import texts from "../../../styles/texts";
import MainInput from "../../global/MainInput";
import { useNavigation } from "@react-navigation/native";
const JournalLayout = (props: any) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignSelf: "center" }}>
        <Text style={texts.headingText}>Find your next location</Text>
        <View style={styles.emptyImageContainer}>
          <Image
            source={require("../../../assets/EmptyJournal.png")}
            style={{ width: 200, height: 200 }}
          />
        </View>
        <Text style={texts.semiHeadingText}>
          Add a pin for when you visit your next place!
        </Text>
        <MainInput
          text={"Add Pin"}
          action={() => props.navigation.navigate("CheckInScreen")}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#FFFFFF",
  },
  emptyImageContainer: {
    alignSelf: "center",
  },
});

export default JournalLayout;
