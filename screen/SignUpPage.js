/** @format */

import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { collection, addDoc, getFirestore } from "firebase/firestore";

function SignUpPage({ navigation }) {
  const [isVisible, setIsVisible] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();
  const db = getFirestore();

  const handleSignUp = async () => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredentials.user.email);
      alert("success");
      navigation.navigate("SignInPage");

      const docRef = await addDoc(collection(db, "users"), {
        email: userCredentials.user.email,
        uid: userCredentials.user.uid,
        signInStyle: userCredentials.user.providerId,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.log(error);
      alert(error);
      console.error("Error adding document: ", error, "look hear");
    }
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView>
        <View style={styles.container}>
          <View style={styles.navigationPane}>
            <TouchableOpacity onPress={() => navigation.navigate("SignInPage")}>
              <MaterialCommunityIcons
                name="arrow-left-circle-outline"
                size={30}
                color="black"
              />
            </TouchableOpacity>

            <Text style={styles.signintext}>Sign Up</Text>
            <MaterialCommunityIcons name="menu" size={24} color="black" />
          </View>
          <View style={styles.lockboximg}>
            <Image source={require("../assets/lockup.png")} />
          </View>
          <View style={{ marginTop: 10 }}>
            <View style={styles.inputbox}>
              <TextInput
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={styles.textInput}
              />
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
                  secureTextEntry={isVisible}
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                  style={styles.textInput}
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
                  placeholder="Confirm Password"
                  style={styles.textInput}
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
            <TouchableOpacity onPress={handleSignUp} style={styles.signupbtn}>
              <Text style={styles.signupText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.alreadyText}>Or</Text>
          <View style={{ flexDirection: "row" }}>
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
            Already have an account?{" "}
            <Text
              style={{ color: "#20C3AF" }}
              onPress={() => navigation.navigate("SignInPage")}
            >
              Sign in
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
    marginHorizontal: 10,
  },
  alreadyText: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginTop: 15,
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

export default SignUpPage;
