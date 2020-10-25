import React, { PureComponent } from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

class Step extends PureComponent {
  state = {
    showSubmit: false,
  };
  render() {
    return (
      <View style={styles.container}>
        {this.props.children}

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableHighlight
            style={[
              styles.buttonContainer,
              {
                backgroundColor:
                  this.props.currentIndex === 0 ? "#BEBEBE" : "#ef820d",
              },
            ]}
            disabled={this.props.currentIndex === 0}
            onPress={() => {
              this.props.previousStep();
            }}
          >
            <Text style={styles.buttonText}>Prev</Text>
          </TouchableHighlight>
          {!this.props.isLast ? (
            <TouchableHighlight
              style={[
                styles.buttonContainer,
                {
                  backgroundColor: this.props.isLast ? "#BEBEBE" : "#ef820d",
                },
              ]}
              onPress={() => {
                this.props.nextStep();
              }}
            >
              <Text style={styles.buttonText}>Next</Text>
            </TouchableHighlight>
          ) : (
            <TouchableHighlight
              style={[styles.buttonContainer]}
              onPress={() => {
                this.props.onSubmit();
              }}
            >
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableHighlight>
          )}
        </View>
      </View>
    );
  }
}

class RegistrationWizard extends PureComponent {
  static Step = (props) => <Step {...props} />;
  state = {
    index: 0,
  };

  _nextStep = () => {
    if (this.state.index != this.props.children.length - 1) {
      this.setState((prevState) => ({
        index: prevState.index + 1,
      }));
    }
  };

  _previousStep = () => {
    if (this.state.index != 0) {
      this.setState((prevState) => ({
        index: prevState.index - 1,
      }));
    }
  };

  render() {
    return (
      <View style={styles.container}>
        {React.Children.map(this.props.children, (el, index) => {
          if (index === this.state.index) {
            return React.cloneElement(el, {
              currentIndex: this.state.index,
              nextStep: this._nextStep,
              previousStep: this._previousStep,
              isLast: this.state.index === this.props.children.length - 1,
            });
          }

          return null;
        })}
      </View>
    );
  }
}

export default RegistrationWizard;

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    width: "100%",
    borderRadius: 30,
    alignSelf: "center",
    backgroundColor: "#ef820d",
  },
  buttonText: {
    color: "#FFF",
  },
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
  },
});
