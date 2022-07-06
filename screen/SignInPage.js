/** @format */

import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  LogBox,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  setPersistence,
  onAuthStateChanged,
  browserLocalPersistence,
} from "firebase/auth";
import { collection, addDoc, getFirestore } from "firebase/firestore";

LogBox.ignoreLogs([
  "AsyncStorage has been extracted from react-native core and will be removed in a future release",
]);
LogBox.ignoreLogs(["Setting a timer for a long period of time"]);
LogBox.ignoreLogs([
  "VirtualizedLists should never be nested inside plain ScrollVi",
]);

function SignInPage({ navigation }) {
  const [isVisible, setIsVisible] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const db = getFirestore();
  const auth = getAuth();

  const handleLogin = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      navigation.replace("HomeScreen");
    } catch (error) {
      alert("user doesnt exist");
      console.log(error);
    }
  };

  const monitorAuth = async () => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("this person is already logged in", user.email);
        navigation.replace("Home");
      }
    });
    return unsubscribe;
  };
  return (
    <ScrollView>
      <KeyboardAvoidingView>
        <View style={styles.container}>
          <View style={styles.navigationPane}>
            <Text style={styles.signintext}>Sign In</Text>
            <MaterialCommunityIcons name="menu" size={24} color="black" />
          </View>
          <View style={styles.lockboximg}>
            <Image source={require("../assets/signin.png")} />
          </View>
          <View style={{ marginTop: 25 }}>
            <View style={styles.inputbox}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginHorizontal: 10,
                }}
              >
                <TextInput
                  placeholder="Email"
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                  autoCapitalize={"none"}
                  autoCorrect={false}
                />
              </View>
            </View>
            <View style={styles.inputbox}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginHorizontal: 10,
                }}
              >
                <TextInput
                  placeholder="Password"
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                  secureTextEntry={isVisible}
                />
                <MaterialCommunityIcons
                  name={isVisible ? "eye-outline" : "eye-off-outline"}
                  size={24}
                  color="black"
                  onPress={() => {
                    setIsVisible(!isVisible);
                  }}
                />
              </View>
            </View>
            <TouchableOpacity style={styles.signupbtn} onPress={handleLogin}>
              <Text style={styles.signupText}>Sign In</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.alreadyText}>Or</Text>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <TouchableOpacity style={styles.socialbtns}>
              <Image source={require("../assets/fblogo.png")} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialbtns}>
              <Image source={require("../assets/twitterlogo.png")} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialbtns}>
              <Image source={require("../assets/linkedin.png")} />
            </TouchableOpacity>
          </View>

          <Text style={styles.alreadyText}>
            Don't have an account?{" "}
            <Text
              style={{ color: "#20C3AF" }}
              onPress={() => navigation.navigate("SignUpPage")}
            >
              Sign Up
            </Text>
          </Text>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  signintext: {
    fontSize: 25,
    color: "#20C3AF",
  },
  signupText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "700",
  },
  signupbtn: {
    height: 70,
    width: 340,
    backgroundColor: "#20C3AF",
    marginHorizontal: 30,
    marginTop: 10,
    justifyContent: "center",
    alignContent: "flex-start",
  },
  textInput: {
    marginHorizontal: 20,
  },
  alreadyText: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginTop: 40,
    fontSize: 15,
  },
  socialbtns: {
    height: 70,
    width: 70,
    backgroundColor: "#f7f7f7",
    marginHorizontal: 30,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  inputbox: {
    height: 70,
    width: 340,
    backgroundColor: "#f7f7f7",
    marginHorizontal: 30,
    marginTop: 10,
    justifyContent: "center",
    alignContent: "flex-start",
    margin: 10,
  },
  lockboximg: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  navigationPane: {
    marginHorizontal: 20,
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  container: {
    flex: 1,
  },
});

export default SignInPage;
