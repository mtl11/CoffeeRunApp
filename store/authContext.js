import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  authenticate: (token) => {},
  logout: () => {},
  toggleMode: () => {},
  toggleCheckInModal: (value) => {},
  toggleCheckInScreen: (value) => {},
  showCheckInModal: false,
  showCheckInScreen: false,
  mode: "",
  darkMode: "",
});

function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState(false);
  const [mode, setMode] = useState("light");
  const [darkMode, setDarkMode] = useState(false);
  const [showCheckInModal, setShowCheckInModal] = useState(false);
  const [showCheckInScreen, setShowCheckInScreen] = useState(false);

  function toggleCheckInModal(value) {
    console.log(showCheckInModal);
    setShowCheckInModal(value);
  }

  function toggleCheckInScreen(value) {
    console.log(showCheckInScreen);
    setShowCheckInScreen(value);
  }
  function authenticate(token) {
    // console.log(token);
    // AsyncStorage.setItem("token", token);
    // setAuthToken(token);
    setAuthToken(!authToken);
  }
  function logout() {
    setAuthToken(null);
    AsyncStorage.removeItem("token");
    AsyncStorage.removeItem("localId");
    AsyncStorage.removeItem("profileType");
  }

  function toggleMode() {
    if (mode == "light") {
      setDarkMode(true);
      setMode("dark");
    } else if (mode == "dark") {
      setDarkMode(false);
      setMode("light");
    }
  }

  const value = {
    toggleCheckInModal: toggleCheckInModal,
    showCheckInModal: showCheckInModal,
    darkMode: darkMode,
    mode: mode,
    toggleMode: toggleMode,
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    logout: logout,
    toggleCheckInScreen: toggleCheckInScreen
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
