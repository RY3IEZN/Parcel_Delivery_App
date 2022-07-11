/** @format */

import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getAuth, signOut } from "firebase/auth";

function ProfilePage({ navigation, route }) {
  const { user, userId, username } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.navigationPane}>
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
          <MaterialCommunityIcons
            name="arrow-left-circle-outline"
            size={30}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <View>
        <View
          style={{
            height: 400,
            marginTop: 20,
          }}
        >
          <View style={styles.profilepic}></View>
          <View>
            <Text style={styles.mainUserText}>{user}</Text>
          </View>
          <View style={styles.btnrow}>
            <View style={styles.editbtn}>
              <Text
                style={{ fontWeight: "700", fontSize: 20, color: "#20c3af" }}
              >
                Edit About
              </Text>
            </View>
            <View style={styles.historybtn}>
              <Text style={{ fontWeight: "700", fontSize: 20, color: "white" }}>
                History
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.lowersection}>
        <View style={styles.displaybox1}>
          <MaterialCommunityIcons
            name="account-circle-outline"
            size={30}
            color="white"
            style={{ marginLeft: 10 }}
          />
          <View style={styles.bigverbose}></View>
          <Text
            style={{
              marginLeft: 10,
              fontWeight: "500",
              color: "red",
              fontSize: 20,
            }}
          >
            {username}
          </Text>
        </View>
        <View style={styles.displaybox}>
          <MaterialCommunityIcons
            name="email"
            size={30}
            color="white"
            style={{ marginLeft: 10 }}
          />
          <View style={styles.bigverbose}></View>
          <Text style={styles.usertxt}>{user}</Text>
        </View>
        <View style={styles.displaybox}>
          <MaterialCommunityIcons
            name="identifier"
            size={30}
            color="white"
            style={{ marginLeft: 10 }}
          />
          <View style={styles.bigverbose}></View>
          <Text style={styles.useridtxt}>{userId}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profilepic: {
    height: 100,
    width: 100,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 50,
    borderColor: "#20C3AF",
    borderRadius: 50,
    borderWidth: 1,
  },
  mainUserText: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 20,
    color: "#20c3af",
    marginTop: 20,
  },
  btnrow: {
    flexDirection: "row",
    marginHorizontal: 20,
    justifyContent: "space-evenly",
    marginTop: 70,
  },
  editbtn: {
    height: 75,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#20C3AF",
    borderWidth: 1,
  },
  historybtn: {
    height: 75,
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    backgroundColor: "#20C3AF",
  },
  lowersection: {
    backgroundColor: "#20C3AF",
    height: "100%",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  displaybox1: {
    height: 75,
    width: "90%",
    borderColor: "#f0f0f0",
    borderWidth: 1,
    marginTop: 40,
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  usertxt: {
    marginLeft: 10,
    fontWeight: "500",
    color: "#f0f0f0",
    fontSize: 20,
  },
  displaybox: {
    height: 75,
    width: "90%",
    borderColor: "#f0f0f0",
    borderWidth: 1,
    marginTop: 10,
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  bigverbose: {
    height: 40,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: "#f0f0f0",
  },
  useridtxt: {
    marginLeft: 10,
    fontWeight: "500",
    color: "#f0f0f0",
    fontSize: 15,
  },
  container: {
    backgroundColor: "#f0f0f0",
    flex: 1,
  },
  navigationPane: {
    marginHorizontal: 20,
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default ProfilePage;
