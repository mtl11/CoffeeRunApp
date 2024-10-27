import { AuthContext } from "../../../store/authContext";
import React, { useContext } from "react";
import { Button, Modal, Text, TouchableOpacity, View } from "react-native";
import MainInput from "../../global/MainInput";
import colors from "../../../styles/colors";
import { Feather } from "@expo/vector-icons";
import texts from "../../../styles/texts";

const CheckInBottomSheet = (props: any) => {
  const authCTX = useContext(AuthContext);
  const navigateToAddPin = async () => {
    await authCTX.toggleCheckInModal(false);
    props.navigation.navigate("CheckInScreen");
  };
  return (
    <Modal
      animationType="none"
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
            width: "88%",
            paddingHorizontal: 20,
            paddingTop: 10,
            marginBottom: "5%",
            backgroundColor: "white",
            borderRadius: 10,
            height: "15%",
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
              <Text style={[texts.placeholderText, { fontSize: 16 }]}>
                Start Creating
              </Text>
            </View>
            <TouchableOpacity
              style={{}}
              onPress={() => {
                authCTX.toggleCheckInModal(false);
              }}
            >
              <Feather name={"x"} size={24} color={"black"} />
            </TouchableOpacity>
          </View>

          <View
            style={{ justifyContent: "space-evenly" }}
          >
            <MainInput text={"Add Pin"} action={navigateToAddPin} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CheckInBottomSheet;
