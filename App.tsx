import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
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
              iconName = "home";
            } else if (route.name === "Earnings") {
              iconName = "wallet";
            } else if (route.name === "Account") {
              iconName = "idcard";
            } else if (route.name === "Plans") {
              iconName = "form";
            } else if (route.name === "Fitness") {
              iconName = "team";
            }

            // You can return any component that you like here!
            return <AntDesign name={iconName} size={24} color="#F89221" />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "green",
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
