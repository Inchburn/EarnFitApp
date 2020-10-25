import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Image } from "react-native";
import RegistrationWizard from "./Register";
import HomeView from "./Home";
export default class LoginView extends Component {
  [x: string]: any;

  constructor(props) {
    super(props);
    this.state = {
      Username: "",
      password: "",
      isLogin: true,
      redirectToHome: false,

      registration: {
        currentStep: 1,
        mobileNumber: "",
        firstName: "",
        lastName: "",
        email: "",
        userName: "",
        password: "",
        confirmPassword: "",
      },
    };
  }

  onSubmit = () => {
    this.setState({
      redirectToHome: true,
    });
  };

  onClickListener = (viewId) => {
    if (viewId === "register") {
      this.setState({
        isLogin: false,
      });
    }
    if (viewId === "login") {
      //Calling Post api endpoint
      // fetch("http://localhost:3001/Users/Authenticate", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //     "Access-Control-Allow-Origin": "*",
      //   },
      //   body: JSON.stringify({
      //     userNm: this.state.Username,
      //     userPwd: this.state.password,
      //   }),
      // })
      //   .then((response) => {
      //     return response.json();
      //   })
      //   .then((response) => {
      //     alert("bae");
      //     alert("hi" + JSON.stringify(response));
      //   })
      //   .catch((error) => alert("Error " + error));
      // alert("Button pressed " + this.state.Username);
    }

    //Calling get api endpoint
    fetch("http://192.168.0.103:3001/Users", {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => alert(JSON.stringify(response)))
      .catch((error) => {
        console.error(error);
      });
  };

  //   const requestOptions = {
  //     method: 'POST',
  //     headers: {
  //         'Content-Type': 'application/json',

  //     },
  //     body: JSON.stringify({ userNm : 'Shrav',
  //         userPwd: 'NewPwd@01'})
  // };

  // fetch("http://192.168.0.103:3001/Users/Authenticate",requestOptions)
  // .then(response => response.json())
  // .then(response => {
  //         alert('hi'+JSON.stringify(response));
  //       })
  //       .catch(error => alert("Error " + error));
  //     alert("Button pressed "+ this.state.Username);
  //   }

  render() {
    return !this.state.redirectToHome ? (
      this.state.isLogin ? (
        <View style={styles.container}>
          {/* Move tile to a different component */}
          <TouchableOpacity style={styles.card}>
            <Image style={styles.cardImage} source={require("../Logo4.png")} />
          </TouchableOpacity>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="Username"
              keyboardType="default"
              underlineColorAndroid="transparent"
              onChangeText={(Username) => {
                this.setState({ Username });
              }}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid="transparent"
              onChangeText={(password) => this.setState({ password })}
            />
          </View>

          <TouchableHighlight
            style={[styles.buttonContainer]}
            onPress={() => {
              this.onClickListener("login");
            }}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.buttonContainer}
            onPress={() => this.onClickListener("restore_password")}
          >
            <Text style={styles.buttonText}>Forgot your password?</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={[styles.buttonContainer, styles.registerLink]}
            onPress={() => this.onClickListener("register")}
          >
            <Text style={styles.registerLinkText}>Register</Text>
          </TouchableHighlight>
        </View>
      ) : (
        <View style={styles.container}>
          <RegistrationWizard>
            <RegistrationWizard.Step>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.inputs}
                  placeholder="Mobile Number"
                  keyboardType="numeric"
                  underlineColorAndroid="transparent"
                  onChangeText={(mobileNumber) =>
                    this.setState({
                      registration: {
                        mobileNumber: mobileNumber,
                      },
                    })
                  }
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.inputs}
                  placeholder="Firstname"
                  keyboardType="default"
                  underlineColorAndroid="transparent"
                  onChangeText={(firstName) =>
                    this.setState({
                      registration: {
                        firstName: firstName,
                      },
                    })
                  }
                />
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.inputs}
                  placeholder="Lastname"
                  keyboardType="default"
                  underlineColorAndroid="transparent"
                  onChangeText={(lastName) =>
                    this.setState({
                      registration: {
                        lastName,
                      },
                    })
                  }
                />
              </View>
            </RegistrationWizard.Step>
            <RegistrationWizard.Step>
              <View style={styles.container}>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.inputs}
                    placeholder="Email (Optional)"
                    keyboardType="email-address"
                    underlineColorAndroid="transparent"
                    onChangeText={(email) =>
                      this.setState({
                        registration: {
                          email,
                        },
                      })
                    }
                  />
                </View>

                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.inputs}
                    placeholder="Age"
                    keyboardType="numeric"
                    underlineColorAndroid="transparent"
                    onChangeText={(age) =>
                      this.setState({
                        registration: {
                          age,
                        },
                      })
                    }
                  />
                </View>

                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.inputs}
                    placeholder="Height(in cms)"
                    keyboardType="numeric"
                    underlineColorAndroid="transparent"
                    onChangeText={(height) =>
                      this.setState({
                        registration: {
                          height,
                        },
                      })
                    }
                  />
                </View>

                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.inputs}
                    placeholder="Weight(in Kgs)"
                    keyboardType="numeric"
                    underlineColorAndroid="transparent"
                    onChangeText={(weight) =>
                      this.setState({
                        registration: {
                          weight,
                        },
                      })
                    }
                  />
                </View>
              </View>
            </RegistrationWizard.Step>
            <RegistrationWizard.Step onSubmit={this.onSubmit}>
              <View style={styles.container}>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.inputs}
                    placeholder="Password"
                    secureTextEntry={true}
                    underlineColorAndroid="transparent"
                    onChangeText={(password) =>
                      this.setState({
                        registration: {
                          password,
                        },
                      })
                    }
                  />
                </View>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.inputs}
                    placeholder="Confirm Password"
                    secureTextEntry={true}
                    underlineColorAndroid="transparent"
                    onChangeText={(confirmPassword) =>
                      this.setState({
                        registration: {
                          confirmPassword,
                        },
                      })
                    }
                  />
                </View>
              </View>
            </RegistrationWizard.Step>
          </RegistrationWizard>
        </View>
      )
    ) : (
      <HomeView></HomeView>
    );
  }
}

const styles = StyleSheet.create({
  stepContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  // inputs: {
  //   height: 45,
  //   marginLeft: 16,
  //   borderBottomColor: "#FFFFFF",
  //   flex: 1,
  // },
  card: {
    backgroundColor: "#fff",
    marginBottom: 45,
    width: "100%",
    height: "30%",
    shadowColor: "#000",
    borderRadius: 5,
    borderColor: "lightgray",
    borderWidth: 2,
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      width: 3,
      height: 3,
    },
  },
  cardImage: {
    marginTop: "2%",
    width: "100%",
    height: "80%",
    resizeMode: "cover",
  },
  cardText: {
    color: "#a9a9a9",
    fontSize: 12,
    height: "10%",
    paddingLeft: 15,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  inputContainer: {
    backgroundColor: "#FFF",
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
  },
  inputs: {
    height: 45,
    width: "100%",
    textAlignVertical: "top",
    alignSelf: "center",
    borderRadius: 35,
    flex: 1,
    textAlign: "center",
    borderColor: "darkgray",
    borderBottomWidth: 1,
  },
  inputIcon: {
    width: "60px",
    height: 30,
    marginLeft: 15,
    justifyContent: "center",
  },
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
  registerLink: {
    backgroundColor: "white",
  },
  registerLinkText: {
    color: "blue",
    textDecorationLine: "underline",
  },
});
