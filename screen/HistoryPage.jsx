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

const auth = getAuth();
const user = auth.currentUser.email;
const db = getFirestore();
const q = query(collection(db, "mail"), where("user", "==", user));

function HistoryPage({ navigation }) {
  const [listdata, setListData] = useState();

  const querySnapshots = async () => {
    try {
      const list = await getDocs(q);
      list.forEach((doc) => {
        listdata.push(doc.id, "=>", doc.data());
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    querySnapshots();
    setListData(listdata);
  }, []);

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
        <FlatList
          data={listdata}
          horizontal
          renderItem={(item) => {
            return (
              <View>
                <Text>{item.senderPhone}</Text>
                <Text>{item.reciverPhone}</Text>
                <Text>{item.senderAddress}</Text>
                <Text>{item.reciverAddress}</Text>
                <Text>{item.reciverName}</Text>
                <Text>{item.senderName}</Text>
              </View>
            );
          }}
        />
        {/* {
          <View>
            <Text>
              {listdata?.map((item) => {
                return (
                  <View style={{ flexDirection: "row" }}>
                    <View>
                      <Text>{item.senderPhone}</Text>
                      <Text>{item.reciverPhone}</Text>
                    </View>
                    <View>
                      <Text>{item.senderAddress}</Text>
                      <Text>{item.reciverAddress}</Text>
                    </View>
                    <View>
                      <Text>{item.reciverName}</Text>
                      <Text>{item.senderName}</Text>
                    </View>
                  </View>
                );
              })}
            </Text>
          </View>
        } */}
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
