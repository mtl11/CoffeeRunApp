import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";
import colors from "../../../styles/colors";
import global from "../../../styles/texts";

const ListView = (props: any) => {
  const DUMMY_DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      shopName: "1 OZ Coffee",
      distanceAway: "6.1mi",
      signature: "Nitro Cold Brew",
      vibez: ["Trendy", "Study", "Spacious"],
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      shopName: "Peets",
      distanceAway: "5.3mi",
      signature: "Hot Coffee",
      vibez: ["Cheap", "Homey", "Nice"],
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      shopName: "Starbucks",
      distanceAway: "10mi",
      vibez: ["Awesome", "Good Lattes"],
      signature: "Iced Vanilla Latte",
    },
  ];

  const Item = ({ props }) => (
    <TouchableOpacity style={styles.item} onPress={()=>{
        
    }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={global.headingText}>{props.shopName}</Text>
        <Text style={global.placeholderText}>{props.distanceAway}</Text>
      </View>
      <Text style={global.bodyText}>Rec: {props.signature}</Text>
      <View style={{ flexDirection: "row" }}>
        {props.vibez.map(function (item, index, list) {
          if (index === 0) {
            return (
              <View key={index}>
                <Text style={global.placeholderText}>{item}</Text>
              </View>
            );
          } else {
            return (
              <View key={index}>
                <Text style={global.placeholderText}> - {item}</Text>
              </View>
            );
          }
        })}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={DUMMY_DATA}
        renderItem={({ item }) => <Item props={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: colors.buttonBackgroundSecondary,
  },
  item: {
    backgroundColor: "white",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 12,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 5,
  },
  title: {
    fontSize: 32,
  },
});

export default ListView;
