/** @format */

import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  FlatList,
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
import axios from "axios";

// const auth = getAuth();
// const user = auth.currentUser.email;

function HistoryPage({ route, navigation }) {
  const [listdata, setListData] = useState([]);
  const db = getFirestore();
  const { user } = route.params;

  useEffect(() => {
    querySnapshots();
  }, []);

  const q = query(collection(db, "mail"), where("user", "==", user));

  const querySnapshots = async () => {
    try {
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        const details = [];
        details.push(doc.id, " => ", doc.data(), ...details);
        setListData(details);
      });
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(listdata, "llllll");

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
        <View></View>
        {/* <Text>{listdata}</Text> */}
        {/* <Text>{listdata.senderName}</Text> */}
        {/* <FlatList
          data={listdata}
          horizontal
          renderItem={(item) => {
            return (
              <View>
                <Text>{item.item.reciverAddress} </Text>
                <Text>{item.item.reciverName} </Text>
                <Text>{item.item.reciverPhone}</Text>
                <Text>{item.item.senderAddress} </Text>
                <Text>{item.item.senderName}</Text>
                <Text>{item.item.senderPhone} </Text>
                <Text>{item.item.user}</Text>
              </View>
            );
          }}
        /> */}
        {
          <View>
            <Text>
              {listdata ? (
                listdata.map((item, index) => {
                  return (
                    <View>
                      <Text>{item.reciverAddress} </Text>
                      <Text>{item.reciverName} </Text>
                      <Text>{item.reciverPhone}</Text>
                      <Text>{item.senderAddress} </Text>
                      <Text>{item.senderName}</Text>
                      <Text>{item.senderPhone} </Text>
                      <Text>{item.user}</Text>
                    </View>
                  );
                })
              ) : (
                <Text> NO inforamtion </Text>
              )}
            </Text>
          </View>
        }
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
