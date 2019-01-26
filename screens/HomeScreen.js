import React from "react";
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  Platform
} from "react-native";
import { Icon } from "expo";

import { Colors, Fonts, Sizes } from "../components/Constants";

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      paras: "5",
      type: "all-meat",
      startWithLorem: false,
      makeItSpicy: false
    };
  }

  static navigationOptions = () => {
    return {
      headerRight: (
        <Image source={require("../assets/images/header-icon.png")} />
      ),
      headerTitle: "Bacon Ipsum"
    };
  };

  handleChange = (field, value) => {
    this.setState({ [field]: value });
  };

  createUrl = () => {
    let url = "";

    url = `paras=${this.state.paras}&type=${this.state.type}`;
    if (this.state.startWithLorem) url += `&start-with-lorem=1`;
    if (this.state.makeItSpicy) url += `&make-it-spicy=1`;

    this.props.navigation.navigate("Ipsum", { url: url, title: "Bacon Ipsum" });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textView}>
          <TextInput
            defaultValue={"5"}
            onChangeText={value => this.handleChange("paras", value)}
            keyboardType={"number-pad"}
            style={styles.textBox}
            value={this.state.paras}
            accessibilityLabel={"Number of paragraphs"}
            accessibilityHint={"Enter the number of paragraphs"}
          />
          <Text style={styles.parasText}>Paragraphs</Text>
        </View>
        <View style={styles.radioView}>
          <TouchableOpacity
            onPress={() => {
              this.handleChange("type", "all-meat");
            }}
            style={styles.radioBtn}
            accessibilityLabel={"All Meat"}
            accessibilityHint={`${
              this.state.type === "all-meat" ? "Option is on" : "Option is off"
            }`}
          >
            {this.state.type === "all-meat" ? (
              <Icon.Ionicons
                name={
                  Platform.OS === "ios"
                    ? "ios-radio-button-on"
                    : "md-radio-button-on"
                }
                size={Sizes.optionIcon}
                color={Colors.selectedIcon}
              />
            ) : (
              <Icon.Ionicons
                name={
                  Platform.OS === "ios"
                    ? "ios-radio-button-off"
                    : "md-radio-button-off"
                }
                size={Sizes.optionIcon}
                color={Colors.unselectedIcon}
              />
            )}
            <Text style={styles.radioText}>All Meat</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.radioView}>
          <TouchableOpacity
            onPress={() => {
              this.handleChange("type", "meat-and-filler");
            }}
            style={styles.radioBtn}
            accessibilityLabel={"Meat and Filler"}
            accessibilityHint={`${
              this.state.type === "meat-and-filler"
                ? "Option is on"
                : "Option is off"
            }`}
          >
            {this.state.type === "meat-and-filler" ? (
              <Icon.Ionicons
                name={
                  Platform.OS === "ios"
                    ? "ios-radio-button-on"
                    : "md-radio-button-on"
                }
                size={Sizes.optionIcon}
                color={Colors.selectedIcon}
              />
            ) : (
              <Icon.Ionicons
                name={
                  Platform.OS === "ios"
                    ? "ios-radio-button-off"
                    : "md-radio-button-off"
                }
                size={Sizes.optionIcon}
                color={Colors.unselectedIcon}
              />
            )}
            <Text style={styles.radioText}>Meat and Filler</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.radioView}>
          <TouchableOpacity
            onPress={() => {
              this.handleChange("startWithLorem", !this.state.startWithLorem);
            }}
            style={styles.radioBtn}
            accessibilityLabel={"Start with Lorem"}
            accessibilityHint={`${
              this.state.startWithLorem ? "Option is on" : "Option is off"
            }`}
          >
            {this.state.startWithLorem ? (
              <Icon.Ionicons
                name={
                  Platform.OS === "ios"
                    ? "ios-checkmark-circle"
                    : "md-checkmark-circle"
                }
                size={Sizes.optionIcon}
                color={Colors.selectedIcon}
              />
            ) : (
              <Icon.Ionicons
                name={
                  Platform.OS === "ios"
                    ? "ios-radio-button-off"
                    : "md-radio-button-off"
                }
                size={Sizes.optionIcon}
                color={Colors.unselectedIcon}
              />
            )}
            <Text style={styles.radioText}>Start with Lorem</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.radioView}>
          <TouchableOpacity
            onPress={() => {
              this.handleChange("makeItSpicy", !this.state.makeItSpicy);
            }}
            style={styles.radioBtn}
            accessibilityLabel={"Make it Spicy"}
            accessibilityHint={`${
              this.state.makeItSpicy ? "Option is on" : "Option is off"
            }`}
          >
            {this.state.makeItSpicy ? (
              <Icon.Ionicons
                name={
                  Platform.OS === "ios"
                    ? "ios-checkmark-circle"
                    : "md-checkmark-circle"
                }
                size={Sizes.optionIcon}
                color={Colors.selectedIcon}
              />
            ) : (
              <Icon.Ionicons
                name={
                  Platform.OS === "ios"
                    ? "ios-radio-button-off"
                    : "md-radio-button-off"
                }
                size={Sizes.optionIcon}
                color={Colors.unselectedIcon}
              />
            )}
            <Text style={styles.radioText}>Make it Spicy</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonView}>
          <Button
            title="Submit"
            color={Colors.buttons}
            onPress={() => this.createUrl()}
            accessibilityLabel={"Submit"}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginRight: 20,
    marginLeft: 20,
    justifyContent: "space-evenly"
  },
  parasText: {
    paddingLeft: 40,
    fontSize: Fonts.optionText,
    fontWeight: "bold"
  },
  spicyText: {
    paddingRight: 60,
    fontSize: Fonts.optionText,
    fontWeight: "bold"
  },
  textBox: {
    fontSize: Fonts.optionText,
    fontWeight: "bold",
    backgroundColor: Colors.textBoxBG,
    width: 40,
    borderColor: Colors.textBoxOutline,
    borderWidth: 1,
    padding: 1,
    textAlign: "center"
  },
  textView: {
    flexDirection: "row"
  },
  buttonView: {
    textAlign: "center",
    padding: 2,
    justifyContent: "space-around"
  },
  radioBtn: {
    flexDirection: "row"
  },
  radioText: {
    paddingLeft: 60,
    fontSize: Fonts.optionText,
    fontWeight: "bold"
  }
});
