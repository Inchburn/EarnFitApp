import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
  Linking,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
export default class HomeView extends Component {
  zoomUrl = "";
  constructor(props) {
    super(props);
  }
  onSubmit() {
    fetch("https://api.zoom.us/v2/users/inchburn@gmail.com/meetings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOm51bGwsImlzcyI6IjM1bTJpeC1YUW42NUlDOG5iZkhZOUEiLCJleHAiOjE2MDQyMTI0NzgsImlhdCI6MTYwMzYwNzY3OX0.cA7p1k_tF5oAVxjXsK6Lt6242wzzH31zZSpCZ1WZM5Y",
      },
      body: JSON.stringify({
        topic: "test",
        settings: {
          host_video: "true",
          registrants_email_notification: "true",
        },
      }),
    })
      .then((response) => {
        return response.json();
        // alert(res);
        //alert(res.start_url);
      })
      .then((response) => {
        // alert("bae");
        this.zoomUrl = response.start_url;
        Linking.openURL(this.zoomUrl);
      })
      .catch((ex) => {
        alert(ex);
      });
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {/* <AntDesign name="home" size={24} color="black" /> */}
        <TouchableHighlight
          style={[styles.buttonContainer]}
          onPress={() => {
            this.onSubmit();
          }}
        >
          <Text style={styles.buttonText}>Create Zoom call</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    alignSelf: "center",
    backgroundColor: "#ef820d",
  },
  buttonText: {
    color: "#FFF",
  },
});
