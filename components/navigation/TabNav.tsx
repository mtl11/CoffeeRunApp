import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CheckInLayout from "../screens/checkIn/CheckInLayout";
import JournalLayout from "../screens/journal/JournalLayout";
import MapLayout from "../screens/map/MapLayout";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

export default (props: any) => {
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
              <FontAwesome5
                name={focused ? "plus-square" : "plus-square"}
                size={28}
                color={color}
              />
            );
          }
        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "#C4C4C4",
        tabBarStyle: {
          alignItems: "center",
          justifyContent: "center",
          borderTopWidth: 0.5,
          borderColor: "#C4C4C4",
        },
        tabBarShowLabel: false,
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
