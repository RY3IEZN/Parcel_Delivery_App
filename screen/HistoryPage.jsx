/** @format */

import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  collection,
  query,
  where,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";

function HistoryPage({ navigation }) {
  const auth = getAuth();
  const user = auth.currentUser.email;
  const db = getFirestore();

  const q = query(collection(db, "mail"), where("user", "==", user));

  const querySnapshots = async () => {
    try {
      const list = await getDocs(q);
      console.log(
        list.forEach((doc) => {
          return (
            <View>
              <Text>{(doc.id, " => ", doc.data())}</Text>
            </View>
          );
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  querySnapshots();

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.title}>
          <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
            <MaterialCommunityIcons
              name="arrow-left-circle-outline"
              size={30}
              color="black"
            />
          </TouchableOpacity>
          <Text style={styles.titleText}>History</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
  navigationPane: {
    marginHorizontal: 20,
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleText: {
    fontSize: 35,
    fontWeight: "700",
    color: "#20C3AF",
    marginLeft: 10,
  },
  title: {
    marginHorizontal: 20,
    marginTop: 60,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default HistoryPage;
