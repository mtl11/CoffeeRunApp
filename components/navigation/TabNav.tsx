import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CheckInLayout from "../screens/checkIn/CheckInLayout";
import JournalLayout from "../screens/journal/JournalLayout";
import MapLayout from "../screens/browse/BrowseLayout";
import React, { useContext } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "../../store/authContext";
import { TouchableOpacity } from "react-native";
const Tab = createBottomTabNavigator();

export default (props: any) => {
  const authCTX = useContext(AuthContext);

  return (
    <Tab.Navigator
      initialRouteName="Map"
      screenOptions={({ navigation, route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Map") {
            return (
              <Feather
                name={focused ? "coffee" : "coffee"}
                size={34}
                color={color}
              />
            );
          } else if (route.name === "Journal") {
            return (
              <Ionicons
                name={focused ? "journal" : "journal-outline"}
                size={28}
                color={color}
              />
            );
          } else if (route.name === "CheckIn") {
            return (
              <TouchableOpacity
                onPress={() => {
                  authCTX.toggleCheckInModal(true);
                }}
                style={{ backgroundColor: "black", flex: 1 }}
              >
                <FontAwesome5 name={"plus-square"} size={28} color={color} />
              </TouchableOpacity>
            );
          }
        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "#C4C4C4",
        tabBarStyle: {
          alignItems: "center",
          // justifyContent: "center",
          borderTopWidth: 0.5,
          borderColor: "#C4C4C4",
          alignContent: "space-between",
        },
      })}
    >
      <Tab.Screen
        name="Map"
        component={MapLayout}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="CheckIn"
        component={CheckInLayout}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Journal"
        component={JournalLayout}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};
