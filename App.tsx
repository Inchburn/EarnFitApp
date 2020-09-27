import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginView from "./Login";

export default function App() {
  return (
    <LoginView></LoginView>
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
