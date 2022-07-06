/** @format */

import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  Platform,
  Modal,
  FlatList,
  ScrollView,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import prices from "../data/priceList";
import { getAuth, signOut } from "firebase/auth";

function HomeScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [amount, setAmount] = useState();
  const auth = getAuth();
  const user = auth.currentUser.email;
  const userId = auth.currentUser.uid;
  const username = auth.currentUser.isAnonymous;

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigation.replace("SignInPage");
      console.log("signed out");
    } catch (error) {
      console.log(error);
    }
  };

  const renderPricelist = ({ item }) => {
    return (
      <View style={styles.pricebtn}>
        <View style={styles.pricecontent}>
          <Text style={styles.onGreenField}>{item.Location}</Text>
          <Text style={styles.onGreenField}>{item.price}</Text>
          <TouchableOpacity
            onPress={() => {
              console.log(amount);
              setModalVisible(false);
              setAmount(item.price);
              console.log(item.price);
              navigation.navigate("PackageSize", {
                screen: "SummaryPage",
                params: { amount: item.price },
              });
            }}
          >
            <MaterialCommunityIcons
              name="arrow-right"
              size={30}
              color="white"
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  0;
  return (
    <View style={styles.container}>
      <View style={styles.upperSection}>
        <View style={styles.navigationPane}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ProfilePage", { user, userId, username })
            }
          >
            <MaterialCommunityIcons
              name="account-circle"
              size={30}
              color="black"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSignOut}>
            <MaterialCommunityIcons name="logout" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.welcomesection}>
          <Text style={styles.onGreenField}>Welcome,</Text>
          <Text style={styles.onGreenField}>{user}</Text>
          <Text style={styles.onGreenField}>Username</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: Platform.OS == "ios" ? 32 : 50,
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          style={styles.actionbuttons}
          onPress={() => navigation.navigate("PackageSize")}
        >
          <View
            style={{
              position: "relative",
              top: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#20C3AF",
                fontSize: 15,
                fontWeight: "700",
              }}
            >
              Send a parcel
            </Text>
            <View style={{ flexDirection: "row", marginTop: 5 }}>
              <MaterialCommunityIcons
                name="package-variant-closed"
                size={24}
                color="black"
              />
              <MaterialCommunityIcons
                name="motorbike"
                size={24}
                color="black"
              />
              <MaterialCommunityIcons
                name="arrow-right-bold-box-outline"
                size={24}
                color="black"
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionbuttons}>
          <View
            style={{
              position: "relative",
              top: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#20C3AF",
                fontSize: 15,
                fontWeight: "700",
                marginBottom: 10,
              }}
            >
              Track a parcel
            </Text>
            <MaterialCommunityIcons
              name="map-marker-radius"
              size={24}
              color="red"
            />
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.looktxt}>Looking for something? Check History</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("HistoryPage")}
          style={styles.historybtn}
        >
          <View style={styles.historycontent}>
            <Text style={styles.onGreenField}>Recent Deliveries</Text>
            <MaterialCommunityIcons
              name="arrow-right"
              size={30}
              color="white"
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.lowerSection}>
        <TouchableOpacity
          style={styles.pricelistbtn}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.pricetext}>Price List</Text>
        </TouchableOpacity>
        <Text style={styles.customercaretext}>
          Need to speak to somone, you can call us on 08100932893
        </Text>
      </View>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <ScrollView style={{ backgroundColor: "white", marginTop: 300 }}>
          <TouchableOpacity
            style={styles.closetbtn}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.pricetext}>Close</Text>
          </TouchableOpacity>
          <View style={{ marginTop: 10 }}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={prices}
              renderItem={renderPricelist}
              scrollEnabled={false}
            />
          </View>
        </ScrollView>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  line: {
    backgroundColor: "red",
    height: 2,
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
  socialbtns: {
    height: 30,
    width: 30,
    backgroundColor: "#f7f7f7",
    justifyContent: "center",
    alignItems: "center",
  },
  customercaretext: {
    textAlign: "center",
    fontSize: 12,
    fontWeight: "400",
    marginTop: 10,
    marginBottom: 10,
  },
  pricetext: {
    textAlign: "center",
    fontSize: 17,
    fontWeight: "700",
  },
  pricelistbtn: {
    marginTop: 10,
    marginHorizontal: 120,
    height: 50,
    backgroundColor: "white",
    justifyContent: "center",
    borderRadius: 20,
    alignItems: "center",
    elevation: 5,
  },
  lowerSection: {
    marginTop: 150,
    height: "100%",
    backgroundColor: "#20C3AF",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  looktxt: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "400",
  },
  onGreenField: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
  },
  pricebtn: {
    marginTop: 10,
    marginHorizontal: 20,
    height: 50,
    backgroundColor: "#20C3AF",
    justifyContent: "center",
    borderRadius: 20,
    elevation: 5,
  },
  historybtn: {
    marginTop: 10,
    marginHorizontal: 20,
    height: 50,
    backgroundColor: "#20C3AF",
    justifyContent: "center",
    borderRadius: 20,
    elevation: 5,
  },
  pricecontent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 30,
  },
  historycontent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 30,
  },
  actionbuttons: {
    backgroundColor: "white",
    height: 150,
    width: 150,
    borderRadius: 40,
    position: "relative",
    top: -50,
    elevation: 3,
    shadowColor: "#20C3AF",
    shadowOpacity: 5,
    shadowRadius: 40,
  },
  welcomesection: {
    justifyContent: "center",
    alignItems: "center",
  },
  navigationPane: {
    marginHorizontal: 20,
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  upperSection: {
    backgroundColor: "#20C3AF",
    height: 300,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
});

export default HomeScreen;
