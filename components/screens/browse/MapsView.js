import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../../../styles/colors";
import MapView, { Marker } from "react-native-maps";
import mapStyles from "../../../styles/map";
import location from "../../../assets/location-symbol-black.png";
// import locationIcon from "../../../assets/locationSymbolBlack.png";
const MapsView = (props) => {
  const ASPECT_RATIO = 1;
  const LATITUDE = 37.78825;
  const LONGITUDE = -122.4324;
  const LATITUDE_DELTA = 0.0922;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

  const initialRegion = {
    latitude: LATITUDE,
    longitude: LONGITUDE,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  };

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
            
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: colors.buttonBackgroundSecondary,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapsView;
