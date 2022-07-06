/** @format */

import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { getAuth, signOut } from "firebase/auth";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import {
  doc,
  setDoc,
  getDoc,
  getDocs,
  addDoc,
  query,
  where,
  serverTimestamp,
  collection,
  getFirestore,
} from "firebase/firestore";

function OrderDetails({ navigation }) {
  const [senderPhone, setSenderPhone] = useState();
  const [senderAddress, setSenderAddress] = useState();
  const [reciverPhone, setReciverPhone] = useState();
  const [reciverAddress, setReciverAddress] = useState();
  const [reciverName, setReciverName] = useState();
  const [senderName, setSenderName] = useState();

  const auth = getAuth();
  const user = auth.currentUser.email;
  const db = getFirestore();

  const uploadDetails = async () => {
    try {
      const docRef = await addDoc(collection(db, "mail"), {
        senderPhone: senderPhone,
        reciverPhone: reciverPhone,
        senderAddress: senderAddress,
        reciverAddress: reciverAddress,
        senderName: senderName,
        reciverName: reciverName,
        serverTimestamp: serverTimestamp(),
        user: user,

        // to: myMail,
        message: {
          text: senderAddress,
          senderPhone,
        },
      });

      console.log("Document written with ID: ", docRef.id);
      navigation.navigate("SummaryPage", {
        senderPhone: senderPhone,
        senderAddress: senderAddress,
        reciverPhone: reciverPhone,
        reciverAddress: reciverAddress,
        senderName: senderName,
        reciverName: reciverName,
      });
    } catch (error) {
      alert(error);
      console.error("Error adding document: ", error, "look hear");
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.title}>
          <TouchableOpacity onPress={() => navigation.goBack("HomeScreen")}>
            <MaterialCommunityIcons
              name="arrow-left-circle-outline"
              size={30}
              color="black"
            />
          </TouchableOpacity>
          <Text style={styles.titleText}>Send Parcel</Text>
        </View>
        <View style={styles.subtitle}>
          <Text style={styles.subtitleText}>Delivery Details</Text>
          <Text>Please fill in the information below</Text>
        </View>

        <View>
          <Text style={styles.inputtitle}>Senders Info</Text>
        </View>

        <View style={styles.form}>
          <Text style={styles.inputtitle}>Name:</Text>
          <View style={styles.inputbox}>
            <TextInput
              placeholder="Name"
              value={senderName}
              onChangeText={(text) => setSenderName(text)}
              style={{ marginHorizontal: 20 }}
            />
            <View style={styles.inputboxline}></View>
          </View>
        </View>
        <View style={styles.form}>
          <Text style={styles.inputtitle}>Phone No:</Text>
          <View style={styles.inputbox}>
            <TextInput
              placeholder="Phone"
              value={senderPhone}
              onChangeText={(text) => setSenderPhone(text)}
              style={{ marginHorizontal: 20 }}
            />
            <View style={styles.inputboxline}></View>
          </View>
        </View>
        <View style={styles.form}>
          <Text style={styles.inputtitle}>Address:</Text>
          <View style={styles.inputbox}>
            <TextInput
              placeholder="Address"
              value={senderAddress}
              onChangeText={(text) => setSenderAddress(text)}
              style={{ marginHorizontal: 20 }}
            />
            <View style={styles.inputboxline}></View>
          </View>
        </View>

        <View>
          <Text style={styles.inputtitle}>Recipient Info</Text>
        </View>

        <View style={styles.form}>
          <Text style={styles.inputtitle}>Name:</Text>
          <View style={styles.inputbox}>
            <TextInput
              placeholder="Name"
              value={reciverName}
              onChangeText={(text) => setReciverName(text)}
              style={{ marginHorizontal: 20 }}
            />
            <View style={styles.inputboxline}></View>
          </View>
        </View>
        <View style={styles.form}>
          <Text style={styles.inputtitle}>Address:</Text>
          <View style={styles.inputbox}>
            <TextInput
              placeholder="Address"
              value={reciverAddress}
              onChangeText={(text) => setReciverAddress(text)}
              style={{ marginHorizontal: 20 }}
            />
            <View style={styles.inputboxline}></View>
          </View>
        </View>
        <View style={styles.form}>
          <Text style={styles.inputtitle}>Phone No:</Text>
          <View style={styles.inputbox}>
            <TextInput
              placeholder="Phone"
              value={reciverPhone}
              onChangeText={(text) => setReciverPhone(text)}
              style={{ marginHorizontal: 20 }}
            />
            <View style={styles.inputboxline}></View>
          </View>
        </View>
        <TouchableOpacity style={styles.closetbtn} onPress={uploadDetails}>
          <Text style={styles.pricetext}>Procced</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  pricetext: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
  },
  closetbtn: {
    marginTop: 25,
    marginHorizontal: 120,
    height: 50,
    backgroundColor: "#20C3AF",
    justifyContent: "center",
    borderRadius: 20,
    alignItems: "center",
    elevation: 5,
  },
  inputboxline: {
    width: "90%",
    height: 1,
    backgroundColor: "black",
    marginHorizontal: 20,
  },
  inputtitle: {
    marginHorizontal: 20,
    marginTop: 7,
  },
  form: {
    marginTop: 3,
  },
  inputbox: {
    backgroundColor: "white",
    marginHorizontal: 10,
    height: 56,
    borderRadius: 5,
    borderColor: "grey",
    borderWidth: 1,
    justifyContent: "center",
  },
  subtitleText: {
    fontSize: 20,
    fontWeight: "700",
  },
  titleText: {
    fontSize: 35,
    fontWeight: "700",
    color: "#20C3AF",
    marginLeft: 10,
  },
  title: {
    marginHorizontal: 20,
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
  },
  subtitle: {
    marginHorizontal: 20,
  },
  container: {
    backgroundColor: "#F2F2F2",
    flex: 1,
  },
});

export default OrderDetails;

/*
 */
