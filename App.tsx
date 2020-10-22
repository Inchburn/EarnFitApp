import React, { Component } from "react";
import { Notifications } from "expo";
import { StyleSheet, View, Image } from "react-native";
import * as Permissions from "expo-permissions";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import LoginView from "./components/Login";

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

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isVisible: true,
      userToken: "",
    };
  }

  UNSAFE_componentWillMount() {
    this.getPushNotificationPermissions();
  }

  sendPushNotification = () => {
    // I got the user that we will send the push notification to from the database and set it to state, now I have access to the users push token.
    const userExpoToken = this.state.userToken;
    let response = fetch("https://exp.host/--/api/v2/push/send", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: userExpoToken,
        sound: "default",
        title: "EarnFit push notification",
        body: "Test Notification",
      }),
    });
    // Now we will send the message to the expo servers
  };

  getPushNotificationPermissions = async () => {
    const { status: existingStatus } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus;

    // only ask if permissions have not already been determined, because
    // iOS won't necessarily prompt the user a second time.
    if (existingStatus !== "granted") {
      // Android remote notification permissions are granted during the app
      // install, so this will only ask on iOS
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }

    // Stop here if the user did not grant permissions
    if (finalStatus !== "granted") {
      return;
    }
    console.log(finalStatus);
    let userToken = await Notifications.getExpoPushTokenAsync();
    // Get the token that uniquely identifies this device
    console.log(
      "Notification Token: ",
      this.setState({ userToken: userToken })
    );

    this.sendPushNotification();
  };

  Hide_Splash_Screen = () => {
    this.setState({
      isVisible: false,
    });
  };

  componentDidMount() {
    var that = this;
    setTimeout(function () {
      that.Hide_Splash_Screen();
    }, 5000);
  }

  render() {
    return !this.state.isVisible ? (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: () => {
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
    ) : (
      <View style={styles.SplashScreen_RootView}>
        <View style={styles.SplashScreen_ChildView}>
          <Image
            source={require("./Splashscreen.jpg")}
            style={{ width: "100%", height: "100%", resizeMode: "contain" }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  SplashScreen_RootView: {
    justifyContent: "center",
    flex: 1,
    margin: 10,
    position: "absolute",
    width: "100%",
    height: "100%",
  },

  SplashScreen_ChildView: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    flex: 1,
  },
});
