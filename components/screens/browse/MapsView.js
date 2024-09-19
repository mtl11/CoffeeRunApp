import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  ActivityIndicator,
} from "react-native";
import colors from "../../../styles/colors";
import MapView, { MapOverlay, Marker } from "react-native-maps";
import mapStyles from "../../../styles/map";
import textStyles from "../../../styles/texts";
import Feather from "@expo/vector-icons/Feather";
import location from "../../../assets/location-pointer.png";
import * as Location from "expo-location";
const MapsView = (props) => {
  const [currectStation, setCurrentStation] = useState();
  const [showOverLayButton, setShowOverLayButton] = useState(false);
  const [initialRegion, setInitialRegion] = useState();
  const [loading, setLoading] = useState(true);

  const DUMMY_DATA = [
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      shopName: "Starbucks",
      distance: "10mi",
      vibez: ["Awesome", "Good Lattes"],
      signature: "Iced Vanilla Latte",
      latitude: 37.38799,
      longitude: -122.083,
    },
  ];
  useEffect(() => {
    const getLocation = async () => {
      let { status } = await Location.getForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      } else {
      }
      try {
        setLoading(true);
        let location = await Location.getLastKnownPositionAsync({});

        setInitialRegion({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        });
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };

    getLocation();
  }, []);
  if (loading) {
    return <ActivityIndicator />;
  } else {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={initialRegion}
          customMapStyle={mapStyles}
          showsCompass={true}
          showsPointsOfInterest={false}
          showsScale={true}
          showsUserLocation={true}
          followsUserLocation={true}
          showsBuildings={false}
          // maxDelta={.01}
          // minDelta={0.005}
        >
          {DUMMY_DATA.map((station) => (
            <Marker
              key={station.id}
              coordinate={{
                latitude: station.latitude,
                longitude: station.longitude,
              }}
              image={location}
              title={station.shopName}
              description={`Distance: ${station.distance} km`}
              onPress={() => {
                setCurrentStation(station);
                setShowOverLayButton(true);
              }}
            />
          ))}
        </MapView>
        {showOverLayButton ? (
          <TouchableOpacity style={styles.mapOverlayButton}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: "2%",
              }}
            >
              <Text style={textStyles.buttonTextSecondary}>
                {currectStation.shopName}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setShowOverLayButton(false);
                }}
              >
                <Feather
                  name="x"
                  size={24}
                  color={colors.placeHolderTextColor}
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ) : null}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.buttonBackgroundSecondary,
  },
  map: {
    flex: 1,
  },
  mapOverlayButton: {
    backgroundColor: "white",
    alignSelf: "center",
    padding: "2%",
    justifyContent: "center",
    position: "absolute",

    marginTop: "130%",
    margin: "5%",
    borderRadius: 12,
    width: "80%",
    height: "10%",
  },
});

export default MapsView;
