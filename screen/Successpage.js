/** @format */

import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";

function Successpage({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <View style={styles.bikeimg}>
          <Image
            source={require("../assets/bikedeleviry-removebg-preview.png")}
            style={styles.bikelogo}
          />
        </View>
        <Text style={styles.successtxt}>Order Succesful</Text>
        <Text style={styles.successtxtdesc}>
          A delivery bike will call you shortly for pickup and drop-off
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("HomeScreen")}
          style={styles.backhomebtn}
        >
          <Text style={styles.backhometxt}>Back to home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backhometxt: { fontWeight: "700", fontSize: 17, color: "white" },
  backhomebtn: {
    width: 150,
    height: 50,
    backgroundColor: "#20C3AF",
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
  },
  successtxtdesc: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 17,
    color: "#20C3AF",
    marginHorizontal: 20,
  },
  successtxt: {
    marginTop: 20,
    fontWeight: "700",
    fontSize: 20,
    color: "#20C3AF",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#F2f2f2",
  },
  bikeimg: {
    height: 200,
    width: 200,
    backgroundColor: "#20C3AF",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Successpage;
