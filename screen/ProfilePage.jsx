/** @format */

import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getAuth, signOut } from "firebase/auth";

function ProfilePage({ navigation, route }) {
  const { user, userId, username } = route.params;

  console.log(userId);

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
          <View
            style={{
              height: 100,
              width: 100,
              justifyContent: "center",
              alignSelf: "center",
              marginTop: 50,
              borderColor: "#20C3AF",
              borderRadius: 50,
              borderWidth: 1,
            }}
          ></View>
          <View>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "700",
                fontSize: 20,
                color: "#20c3af",
                marginTop: 20,
              }}
            >
              {user}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginHorizontal: 20,
              justifyContent: "space-evenly",
              marginTop: 70,
            }}
          >
            <View
              style={{
                height: 75,
                width: 150,
                justifyContent: "center",
                alignItems: "center",
                borderColor: "#20C3AF",
                borderWidth: 1,
              }}
            >
              <Text
                style={{ fontWeight: "700", fontSize: 20, color: "#20c3af" }}
              >
                Edit About
              </Text>
            </View>
            <View
              style={{
                height: 75,
                justifyContent: "center",
                alignItems: "center",
                width: 150,
                backgroundColor: "#20C3AF",
              }}
            >
              <Text style={{ fontWeight: "700", fontSize: 20, color: "white" }}>
                History
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "#20C3AF",
          height: "100%",
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
        }}
      >
        <View
          style={{
            height: 75,
            width: "90%",
            borderColor: "#f0f0f0",
            borderWidth: 1,
            marginTop: 40,
            marginHorizontal: 20,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <MaterialCommunityIcons
            name="account-circle-outline"
            size={30}
            color="white"
            style={{ marginLeft: 10 }}
          />
          <View
            style={{
              height: 40,
              marginLeft: 10,
              borderWidth: 1,
              borderColor: "#f0f0f0",
            }}
          ></View>

          <Text
            style={{
              marginLeft: 10,
              fontWeight: "500",
              color: "#f0f0f0",
              fontSize: 20,
            }}
          >
            {username}
          </Text>
        </View>
        <View
          style={{
            height: 75,
            width: "90%",
            borderColor: "#f0f0f0",
            borderWidth: 1,
            marginTop: 10,
            marginHorizontal: 20,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <MaterialCommunityIcons
            name="email"
            size={30}
            color="white"
            style={{ marginLeft: 10 }}
          />
          <View
            style={{
              height: 40,
              marginLeft: 10,
              borderWidth: 1,
              borderColor: "#f0f0f0",
            }}
          ></View>

          <Text
            style={{
              marginLeft: 10,
              fontWeight: "500",
              color: "#f0f0f0",
              fontSize: 20,
            }}
          >
            {user}
          </Text>
        </View>
        <View
          style={{
            height: 75,
            width: "90%",
            borderColor: "#f0f0f0",
            borderWidth: 1,
            marginTop: 10,
            marginHorizontal: 20,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <MaterialCommunityIcons
            name="phone"
            size={30}
            color="white"
            style={{ marginLeft: 10 }}
          />
          <View
            style={{
              height: 40,
              marginLeft: 10,
              borderWidth: 1,
              borderColor: "#f0f0f0",
            }}
          ></View>

          <Text
            style={{
              marginLeft: 10,
              fontWeight: "500",
              color: "#f0f0f0",
              fontSize: 15,
            }}
          >
            {userId}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
