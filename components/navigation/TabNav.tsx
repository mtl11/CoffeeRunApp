import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CheckInLayout from "../screens/checkIn/CheckInLayout";
import JournalLayout from "../screens/journal/JournalLayout";
import MapLayout from "../screens/browse/BrowseLayout";
import React, { useContext } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AuthContext } from "../../store/authContext";
import { View, Text,TouchableOpacity } from "react-native";
import colors from "../../styles/colors";
const Tab = createBottomTabNavigator();

export default (props: any) => {
  const authCTX = useContext(AuthContext);

  function getIcon(tabName: string, focused: boolean){
    const color = focused ? "black" : colors.placeHolderTextColor; 
    if (tabName === "Map") {
      return (
        <Feather
          name={focused ? "coffee" : "coffee"}
          size={34}
          color={color}
        />
      );
    } else if (tabName === "Journal") {
      return (
        <Ionicons
          name={focused ? "journal" : "journal-outline"}
          size={28}
          color={color}
        />
      );
    } else if (tabName === "CheckIn") {
      return (
        <TouchableOpacity
          onPress={() => {
            authCTX.toggleCheckInModal(true);
          }}
        >
          <FontAwesome5 name={"plus"} size={28} color={color} />
        </TouchableOpacity>
      );
    }
  }

  function MyTabBar({ state, descriptors, navigation }) {
    return (
      <View style={{ flexDirection: 'row', alignItems: "center",
            justifyContent: "space-around",
            borderTopWidth: 0.5,
            borderColor: "#C4C4C4",
            alignContent: "space-between",
          }}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
  
          const isFocused = state.index === index;
  
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };
  
          return (
            <TouchableOpacity
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              style={{ marginBottom: "8%", marginTop: "2%" }}
            >
              {getIcon(route.name, isFocused)}
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }

  return (
    <Tab.Navigator
      initialRouteName="Map"
      tabBar={props => <MyTabBar {...props} />}
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
