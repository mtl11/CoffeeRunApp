import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { BottomSheet } from "@rneui/themed";
import NoAuthMessage from "../../global/NoAuthMessage";
import GoBackButton from "../../global/GoBackButton";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";

import { manipulateAsync, SaveFormat } from "expo-image-manipulator";
import MainInput from "../../global/MainInput";
import AuthTextInput from "../../global/AuthTextInput";
import MainTextInput from "../../global/MainTextInput";
import texts from "../../../styles/texts";

const CheckInLayout = (props: any) => {
  const navigation = useNavigation();
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [restaurantDetails, setRestaurantDetails] = useState("");

  // Function to pick an image from the device's gallery
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (result.assets != null) {
      const uri = result.assets[0].uri;
      console.log(result.assets[0]);
      // setImage(uri);
      const manipResult = await manipulateAsync(uri, [], {
        format: SaveFormat.PNG,
      });
      if (!result.canceled) {
        setImage(manipResult);
      }
    }
  };

  // Handle the form submission (you can replace this with your own logic)
  const handleSubmit = () => {
    // Example: Create a post object and log it
    const newPost = {
      image,
      description,
      restaurantDetails,
    };
    console.log("New Post:", newPost);
    // Add navigation or API logic here to save or publish the post
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignSelf: "flex-start", marginBottom: "5%" }}>
        <GoBackButton navigation={navigation} />
      </View>
      <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
        {image ? (
          <Image
            source={{ uri: image.uri }}
            style={{
              width: 300,
              height: 300,
              resizeMode: "contain",
            }}
          />
        ) : (
          <Text style={[styles.imagePickerText, texts.placeholderText]}>Add Photo</Text>
        )}
      </TouchableOpacity>
      <View style={{marginHorizontal: "5%"}}>
      <TextInput
        style={[styles.input,texts.bodyText]}
        placeholder="Write a description..."
        value={description}
        onChangeText={setDescription}
        blurOnSubmit={true}
        maxLength={80}
        multiline
      />
      </View>
     
      <View style={{marginHorizontal: "5%"}}>
      <TextInput
        style={[styles.input,texts.bodyText]}
        placeholder="Choose a location..."
        value={restaurantDetails}
        onChangeText={setRestaurantDetails}
      />
      </View>
      <MainInput text ={"Done"} action={()=>navigation.goBack()}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#FFFFFF",
  },
  imagePicker: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf:"center",
    height: 300,
    width:300,
    backgroundColor: "#f0f0f0",
    marginBottom: 16,
    borderRadius: 8,
  },
  imagePickerText: {
    color: "#888"
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "#ddd",
    paddingVertical: 8,
    marginBottom: 16,
    fontSize: 16,
  },
});

export default CheckInLayout;
