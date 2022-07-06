/** @format */

import React, { useEffect } from "react";
import { View, StyleSheet, LogBox } from "react-native";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  setPersistence,
  onAuthStateChanged,
  browserLocalPersistence,
} from "firebase/auth";

function AuthSplashScreen({ navigation }) {
  LogBox.ignoreLogs([
    "AsyncStorage has been extracted from react-native core and will be removed in a future release",
  ]);
  LogBox.ignoreLogs(["Setting a timer for a long period of time"]);

  const auth = getAuth();

  useEffect(() => {
    monitorAuth();
  });

  const monitorAuth = async () => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("this person is already logged in", user.email);
        navigation.replace("HomeScreen");
      } else {
        navigation.replace("SignInPage");
      }
    });
    return unsubscribe;
  };

  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: { backgroundColor: "green", flex: 1 },
});

export default AuthSplashScreen;
