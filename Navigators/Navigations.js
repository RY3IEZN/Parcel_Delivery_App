/** @format */

import React from "react";
import { View, StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInPage from "../screen/SignInPage";
import SignUpPage from "../screen/SignUpPage";
import HomeScreen from "../screen/HomeScreen";
import PackageSize from "../screen/PackageSize";
import OrderDetails from "../screen/OrderDetails";
import Successpage from "../screen/Successpage";
import SummaryPage from "../screen/SummaryPage";
import ProfilePage from "../screen/ProfilePage";
import AuthSplashScreen from "../screen/AuthSplashScreen";
// import HistoryPage from "../screen/HistoryPage";

const Stack = createNativeStackNavigator();

function Navigations(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="AuthSplashScreen"
          component={AuthSplashScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="SignInPage"
          component={SignInPage}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="SignUpPage"
          component={SignUpPage}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="HomeScreen"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="PackageSize"
          component={PackageSize}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="OrderDetails"
          component={OrderDetails}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="successpage"
          component={Successpage}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="SummaryPage"
          component={SummaryPage}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="ProfilePage"
          component={ProfilePage}
        />
        {/* <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="HistoryPage"
          component={HistoryPage}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Navigations;
