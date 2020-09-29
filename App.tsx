import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import LoginView from "./Login";

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <AntDesign name="home" size={24} color="black" />
    </View>
  );
}

function EarningsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <AntDesign name="wallet" size={24} color="black" />
    </View>
  );
}

function AccountScreen() {
  return <LoginView></LoginView>;
}

function PlansScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <AntDesign name="form" size={24} color="black" />
    </View>
  );
}

function FitnessScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <AntDesign name="team" size={24} color="black" />
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: () => {
            let iconName;

            if (route.name === "Earnfit") {
              return <AntDesign name="home" size={24} color="#ef820d" />;
            } else if (route.name === "Earnings") {
              return (
                <MaterialCommunityIcons
                  name="currency-inr"
                  size={24}
                  color="#ef820d"
                />
              );
            } else if (route.name === "Account") {
              return (
                <MaterialCommunityIcons
                  name="account"
                  size={24}
                  color="#ef820d"
                />
              );
            } else if (route.name === "Plans") {
              return <AntDesign name="form" size={24} color="#ef820d" />;
            } else if (route.name === "Fitness") {
              return (
                <MaterialIcons
                  name="fitness-center"
                  size={24}
                  color="#ef820d"
                />
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: "#ef820d",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Earnfit" component={HomeScreen} />
        <Tab.Screen name="Fitness" component={FitnessScreen} />
        <Tab.Screen name="Earnings" component={EarningsScreen} />
        <Tab.Screen name="Plans" component={PlansScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
