/** @format */

import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function PackageSize({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
          <MaterialCommunityIcons
            name="arrow-left-circle-outline"
            size={30}
            color="black"
          />
        </TouchableOpacity>
        <Text style={styles.titleText}>Send Parcel</Text>
      </View>
      <View style={styles.subtitle}>
        <Text style={styles.subtitleText}>Parcel Size</Text>
        <Text>Please select a parcel size</Text>
      </View>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("OrderDetails")}
      >
        <View style={styles.cardDetails}>
          <View>
            <Image source={require("../assets/Envelope.png")} />
          </View>
          <View style={{ marginHorizontal: 25 }}>
            <Text style={styles.descriptionTitle}>Small</Text>
            <Text style={styles.descriptionSize}>Max:25kg, 8 X 38 x 64 cm</Text>
            <Text style={styles.descriptionfit}>Fits in an Envelope</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <View style={styles.cardDetails}>
          <View>
            <Image source={require("../assets/Boxbody.png")} />
          </View>
          <View style={{ marginHorizontal: 20 }}>
            <Text style={styles.descriptionTitle}>Medium</Text>
            <Text style={styles.descriptionSize}>
              Max:25kg, 19 X 38 x 64 cm
            </Text>
            <Text style={styles.descriptionfit}>Fits in a shoe box</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <View style={styles.cardDetails}>
          <View>
            <Image source={require("../assets/Bigbox.png")} />
          </View>
          <View style={{ marginHorizontal: 20 }}>
            <Text style={styles.descriptionTitle}>Large</Text>
            <Text style={styles.descriptionSize}>
              Max:25kg, 41 X 38 x 64 cm
            </Text>
            <Text style={styles.descriptionfit}>Fits in a cardboard box</Text>
          </View>
        </View>
      </TouchableOpacity>

      <View style={styles.card}>
        <View style={styles.cardDetails}>
          <View>
            <Image source={require("../assets/Customparcel.png")} />
          </View>
          <View style={{ marginHorizontal: 40 }}>
            <Text style={styles.descriptionTitle}>Custom size</Text>
            <Text style={styles.descriptionSize}>Max:30kg, 30cm</Text>
            <Text style={styles.descriptionfit}>
              Please fill in description
            </Text>
            <Text>UNAVAILABLE</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  descriptionTitle: {
    fontSize: 20,
    fontWeight: "800",
  },
  descriptionSize: {
    fontSize: 15,
    fontWeight: "400",
  },
  descriptionfit: {
    fontSize: 15,
    fontWeight: "400",
    color: "grey",
    marginTop: 10,
  },
  cardDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 30,
    marginTop: 10,
  },
  card: {
    backgroundColor: "white",
    height: 115,
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 30,
    elevation: 10,
    shadowColor: "#20C3AF",
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowRadius: 5,
  },
  subtitleText: {
    fontSize: 20,
    fontWeight: "700",
  },
  titleText: {
    fontSize: 35,
    fontWeight: "700",
    marginLeft: 10,
  },
  title: {
    marginHorizontal: 20,
    marginTop: 80,
    flexDirection: "row",
    alignItems: "center",
  },
  subtitle: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  container: {
    backgroundColor: "#F2F2F2",
    flex: 1,
  },
});

export default PackageSize;
