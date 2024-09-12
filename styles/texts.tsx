import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import colors from "./colors";

export default StyleSheet.create({
    buttonTextMain: {
        fontFamily: "Poppins-Medium",
        color: "white",
        fontSize: 16,
    },
    buttonTextSecondary: {
        fontFamily: "Poppins-Medium",
        color: "black",
        fontSize: 16,
    },
    headingText: {
        fontFamily: "Poppins-Medium",
        color: "black",
        fontSize: 18,
    },bodyText: {
        fontFamily: "Poppins-Regular",
        color: "black",
        fontSize: 14,
    },
    linkText: {
        fontFamily: "Poppins-SemiBold",
        color: "black",
        fontSize: 14,
    },
    placeholderText: {
        fontFamily: "Poppins-Regular",
        color: colors.placeHolderTextColor,
        fontSize: 14,
    },

});
