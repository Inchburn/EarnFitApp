import React, { constructor, Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
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
    };
  }

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
    ) : (
      <View style={styles.SplashScreen_RootView}>
        <View style={styles.SplashScreen_ChildView}>
          <Image
            source={{
              uri:
                "https://static.javatpoint.com/tutorial/react-native/images/react-native-tutorial.png",
            }}
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
    backgroundColor: "#00BCD4",
    flex: 1,
  },
});
