import React, { useEffect, useState } from "react";
import {
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
} from "react-native";
import NoAuthMessage from "../../global/NoAuthMessage";
import BrowseHeader from "./BrowseHeader";
import ListView from "./ListView";
import MapView from "./MapsView";
import * as Location from "expo-location";

const BrowseLayout = (props: any) => {
  const [showList, setShowList] = useState(true);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <BrowseHeader showList={showList} action={setShowList} />
      {showList ? <ListView /> : <MapView/>}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#FFFFFF",
  },
});

export default BrowseLayout;
