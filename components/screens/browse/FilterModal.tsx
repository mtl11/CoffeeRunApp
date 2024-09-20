import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Modal,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import colors from "../../../styles/colors";
import textStyles from "../../../styles/texts";
const FilterModal = (props: any) => {
  const [price, setPrice] = useState("Budget");
  const [aesthetic, setAesthetic] = useState("Trendy");

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.showFilterModal}
      onRequestClose={() => {
        setPrice("Budget");
        setAesthetic("Trendy");
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
          <View style={{ alignSelf: "center", marginTop: "5%" }}>
            <Text style={textStyles.headingText}>
              Adjust Your Browse Filters
            </Text>
          </View>
          <View style={{margin: "2.5%"}}>
            <Text style={[textStyles.semiHeadingText, {marginBottom: "2.5%"}]}>Aesthetic</Text>
            <View style={styles.fitlerRow}>
              <TouchableOpacity
                style={
                  aesthetic == "Trendy"
                    ? styles.selectedSingleFilter
                    : styles.singleFilter
                }
                onPress={() => {
                  setAesthetic("Trendy");
                }}
              >
                <Text
                  style={
                    aesthetic == "Trendy"
                      ? textStyles.buttonTextMain
                      : textStyles.buttonTextSecondary
                  }
                >
                  Trendy
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  aesthetic == "Cozy"
                    ? styles.selectedSingleFilter
                    : styles.singleFilter
                }
                onPress={() => {
                  setAesthetic("Cozy");
                }}
              >
                <Text
                  style={
                    aesthetic == "Cozy"
                      ? textStyles.buttonTextMain
                      : textStyles.buttonTextSecondary
                  }
                >
                  Cozy
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  aesthetic == "Modern"
                    ? styles.selectedSingleFilter
                    : styles.singleFilter
                }
                onPress={() => {
                  setAesthetic("Modern");
                }}
              >
                <Text
                  style={
                    aesthetic == "Modern"
                      ? textStyles.buttonTextMain
                      : textStyles.buttonTextSecondary
                  }
                >
                  Modern
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{margin: "2.5%"}}>
            <Text style={[textStyles.semiHeadingText, {marginBottom: "2.5%"}]}>Price</Text>
            <View style={styles.fitlerRow}>
              <TouchableOpacity
                style={
                  price == "Budget"
                    ? styles.selectedSingleFilter
                    : styles.singleFilter
                }
                onPress={() => {
                  setPrice("Budget");
                }}
              >
                <Text
                  style={
                    price == "Budget"
                      ? textStyles.buttonTextMain
                      : textStyles.buttonTextSecondary
                  }
                >
                  Budget
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  price == "Premium"
                    ? styles.selectedSingleFilter
                    : styles.singleFilter
                }
                onPress={() => {
                  setPrice("Premium");
                }}
              >
                <Text
                  style={
                    price == "Premium"
                      ? textStyles.buttonTextMain
                      : textStyles.buttonTextSecondary
                  }
                >
                  Premium
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{margin: "2.5%"}}>
            <Text style={[textStyles.semiHeadingText, {marginBottom: "2.5%"}]}>Brands</Text>
            <View style={styles.fitlerRow}>
              <TouchableOpacity style={styles.selectedSingleFilter}>
                <Text style={textStyles.buttonTextMain}>Local Roasters</Text>
              </TouchableOpacity>
            </View>
          </View>
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
  fitlerRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  singleFilter: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
  },
  selectedSingleFilter: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    backgroundColor: "black",
  },
});

export default FilterModal;
