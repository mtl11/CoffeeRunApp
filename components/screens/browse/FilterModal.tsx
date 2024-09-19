import React from "react";
import {
  View,
  StyleSheet,
  Modal,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import colors from "../../../styles/colors";

const FilterModal = (props: any) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.showFilterModal}
      onRequestClose={() => {
        props.setShowFilterModal(false);
      }}
    >
      <SafeAreaView style={styles.modalView}>
        <View style={{ padding: "3%" }}>
          <TouchableOpacity
            onPress={() => {
              props.setShowFilterModal(false);
            }}
          >
            <Feather name="x" size={24} color={colors.buttonBackgroundMain} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default FilterModal;
