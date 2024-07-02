import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import AuthTextInput from "../../../global/textInputs/AuthTextInput";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// const [passwordDontMatch, setPasswordDontMatch] = useState(false);

// const [isAuth, setIsAuth] = useState(false);
// const [visible, setVisible] = useState(true);

const LoginForm = (props: any) =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // async function authenticateHandler() {
    //     try {
    //       // const token = await authenticateUser(email, password);
    //       setPasswordDontMatch(false);
    //       // authCTX.authenticate(token);
    //       AsyncStorage.setItem("email", email);
    //     } catch (error) {
    //       setPasswordDontMatch(true);
    //       setIsAuth(false);
    //     }
    //   }

    return (
    <KeyboardAwareScrollView>
        <AuthTextInput placeholderText={"Email"} onChangeTextFunction={setEmail} />
        <AuthTextInput placeholderText={"Password"} onChangeTextFunction={setPassword} />
        <TouchableOpacity
          style={styles.forgotPasswordContainer}
          onPress={() => {
            props.navigation.navigate("ForgetPass");
          }}
        >
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            // setIsAuth(true);
            // authenticateHandler();
          }}
        >
          {/* {!isAuth ? (
            <Text style={styles.buttonText}>Login</Text>
          ) : (
            <ActivityIndicator size={22} />
          )} */}
        </TouchableOpacity>
        <View style={styles.newAccountContainer}>
          <Text style={styles.newAccountText}>Don't have an account?</Text>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("Signup");
            }}
          >
            <Text style={styles.buttonTextSignUp}> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    placeHolderTextColor:{
        color:"grey"
    },
    imageContainer: {
        flexDirection: "row",
        justifyContent: "center",
      },
      welcomeText: {
        fontSize: 20,
        fontFamily: "Rubik-Medium",
      },
      welcomeContainer: {
        alignSelf: "center",
        marginBottom: "10%",
        marginTop: "10%"
      },
      stripedImage: {
        alignSelf: "center",
        width: 50,
        height: 26,
        resizeMode: "contain",
        
      },
      logoImage: {
        width: 60,
        height: 45,
        resizeMode: "contain",
        marginHorizontal: "1%"
      },
      image: {
        // alignSelf: "center",
        // marginTop: "30%",
        width: 125,
        height: 45,
        resizeMode: "contain",
        marginHorizontal: "1%"
      },
      forgotPasswordContainer: {
        alignSelf: "flex-end",
        marginHorizontal: "8%",
        marginTop: 10,
        marginBottom: 20,
      },
      container: {
        height: "100%",
      },
      forgotPasswordText: {
        fontFamily: "Rubik-Medium",
        fontSize: 16,
      },
      buttonContainer: {
        alignItems: "center",
        padding: 16,
        marginHorizontal: "8%",
        borderRadius: 12,
        marginTop: "7%"
      },
      buttonTextSignUp: {
        fontFamily: "Rubik-Medium",
        fontSize: 18,
      },
      buttonText: {
        fontFamily: "Rubik-Medium",
        color: "white",
        fontSize: 18,
      },
      newAccountContainer:{
        flexDirection: "row",
        justifyContent: "center",
        marginTop: "33%"
      },
      newAccountText:{
        fontFamily: "Rubik-Regular",
        fontSize: 18,
      }
});

export default LoginForm;