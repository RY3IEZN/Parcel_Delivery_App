/** @format */

import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

function SummaryPage({ navigation, route }) {
  const {
    senderName,
    reciverName,
    senderPhone,
    reciverPhone,
    senderAddress,
    reciverAddress,
    amount,
  } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.navigationpane}>
        <MaterialCommunityIcons name="arrow-left-circle-outline" size={25} />
        <Text style={styles.topTitle}>CheckOut</Text>
      </View>

      <LinearGradient
        colors={["#f2f2f2", "#20C3AF"]}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 3, y: 0.5 }}
      >
        <View
          style={{
            marginTop: 80,
            marginHorizontal: 20,
          }}
        >
          <Text style={styles.stars}>**** **** **** ****</Text>
        </View>
        <View style={styles.atmlowerscetion}>
          <View>
            <Text style={styles.pricetext}>Uche Musa Ayo</Text>
            <Text>MM/YY</Text>
          </View>
        </View>
      </LinearGradient>
      {/* lowersection */}
      <View style={styles.lowersection}>
        <View style={styles.summarynav}>
          <Text>Summary</Text>
          <Text>Edit {"   >"}</Text>
        </View>
        <View style={styles.summarydetails}>
          <View style={styles.fromto}>
            <Text style={{ fontWeight: "700" }}>From: </Text>
            <Text style={{ fontWeight: "700" }}>To: </Text>
          </View>
          <View style={styles.sumarryline}>
            <Text>{senderName}</Text>
            <Text>{reciverName}</Text>
          </View>
          <View style={styles.sumarryline}>
            <Text>{senderPhone}</Text>
            <Text>{reciverPhone}</Text>
          </View>
          <View style={styles.sumarryline}>
            <Text>{senderAddress}</Text>
            <Text>{reciverAddress}</Text>
          </View>

          <Text style={styles.packagesizeTxt}>PackageSize: </Text>
          <Text style={styles.pricetext2}>Price: </Text>
        </View>
        <TouchableOpacity
          style={styles.pricelistbtn}
          onPress={() => navigation.navigate("successpage")}
        >
          <Text style={styles.pricetext}>Pay Now</Text>
        </TouchableOpacity>
        <View style={styles.otherbtn}>
          <TouchableOpacity style={styles.requestbtn} onPress={() => {}}>
            <Text style={styles.pricetext}>Bank Transfer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.transferbtn} onPress={() => {}}>
            <Text style={styles.requesttext}>Request Reciever Pay</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  atmlowerscetion: {
    marginTop: 80,
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginHorizontal: 20,
    flexDirection: "row",
  },
  summarynav: {
    marginHorizontal: 30,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  fromto: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  sumarryline: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 5,
  },
  pricetext2: {
    marginHorizontal: 5,
    fontSize: 15,
    fontWeight: "700",
  },
  packagesizeTxt: {
    marginHorizontal: 5,
    fontSize: 15,
    fontWeight: "700",
    marginTop: 5,
  },
  summarydetails: {
    marginHorizontal: 10,
    marginTop: 20,
    backgroundColor: "#f7f7f7",
    height: 170,
    marginTop: 10,
    borderRadius: 20,
    marginHorizontal: 20,
  },
  lowersection: {
    backgroundColor: "#20C3AF",
    height: "100%",
    marginTop: 60,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
  },
  topTitle: {
    marginLeft: 40,
    fontSize: 30,
    fontWeight: "700",
    color: "#20C3AF",
  },
  navigationpane: {
    flexDirection: "row",
    marginTop: 50,
    alignItems: "center",
    marginLeft: 20,
  },
  otherbtn: {
    flexDirection: "row",
    marginHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
  },
  container: {
    backgroundColor: "#f7f7f7",
  },
  gradient: {
    height: 260,
    marginHorizontal: 20,
    borderRadius: 20,
    marginTop: 10,
  },
  transferbtn: {
    marginTop: 10,
    height: 50,
    width: 150,
    backgroundColor: "white",
    justifyContent: "center",
    borderRadius: 20,
    alignItems: "center",
    elevation: 5,
  },
  requestbtn: {
    marginTop: 10,
    height: 50,
    width: 150,
    backgroundColor: "white",
    justifyContent: "center",
    borderRadius: 20,
    alignItems: "center",
    elevation: 5,
  },
  pricelistbtn: {
    marginTop: 10,
    marginHorizontal: 50,
    height: 50,
    backgroundColor: "white",
    justifyContent: "center",
    borderRadius: 20,
    alignItems: "center",
    elevation: 5,
  },
  pricetext: {
    textAlign: "center",
    fontSize: 17,
    fontWeight: "700",
  },
  requesttext: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "700",
  },
  stars: {
    fontSize: 30,
    fontWeight: "700",
  },
});

export default SummaryPage;
