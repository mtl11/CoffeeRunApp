import { AuthContext } from "../../../store/authContext";
import React, { useContext } from "react";
import { Button, Modal, Text, TouchableOpacity, View } from "react-native";
import MainInput from "../../global/MainInput";
import colors from "../../../styles/colors";
import { Feather } from "@expo/vector-icons";
import texts from "../../../styles/texts";

const CheckInBottomSheet = () => {
  const authCTX = useContext(AuthContext);
  const navigateToAddPin = () => {};
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={authCTX.showCheckInModal}
      onRequestClose={() => {
        authCTX.toggleCheckInModal(false);
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignContent: "flex-end",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <View
          style={{
            width: "80%",
            paddingHorizontal: 20,
            paddingVertical: 10,
            margin: "5%",
            backgroundColor: "white",
            borderRadius: 10,
            height: "15%",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", marginHorizontal: "5%" }}>
            <View
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={[texts.placeholderText, {fontSize: 16}]}>Start Creating</Text>
            </View>
            <TouchableOpacity
              style={{}}
              onPress={() => {
                authCTX.toggleCheckInModal(false);
              }}
            >
              <Feather name={"x"} size={20} color={"black"} />
            </TouchableOpacity>
          </View>

          <View style={{ justifyContent: "space-evenly", marginVertical: "5%" }}>
            <MainInput text={"Add Pin"} action={navigateToAddPin} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CheckInBottomSheet;
