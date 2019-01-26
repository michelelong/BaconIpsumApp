import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  ScrollView,
  Clipboard,
  ActivityIndicator,
  TouchableOpacity
} from "react-native";
import { Icon } from "expo";

import { Colors, Sizes } from "../components/Constants";

export default class IpsumScreen extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <TouchableOpacity
          onPress={navigation.getParam("copyToClipboard")}
          accessibilityLabel={"Copy to Clipboard"}
        >
          <Icon.Ionicons
            name={Platform.OS === "ios" ? "ios-clipboard" : "md-clipboard"}
            size={Sizes.clipboardIcon}
            color={Colors.clipboardIcon}
            style={styles.clipboard}
          />
        </TouchableOpacity>
      ),
      headerTitleStyle: {
        justifyContent: "center",
        marginLeft: "auto",
        marginRight: "auto",
        fontWeight: "bold",
        color: Colors.headerTitleText
      },
      headerStyle: { backgroundColor: Colors.headerBarBG },
      headerTintColor: Colors.headerTitleText,
      title: navigation.getParam("title", "HomeScreen")
    };
  };

  getBacon = async () => {
    let url = `https://baconipsum.com/api/?${
      this.props.navigation.state.params.url
    }`;
    try {
      let response = await fetch(url, { method: "GET" });
      let responseJson = await response.json();
      this.setState({ data: responseJson });
    } catch (error) {
      return error;
    }
  };

  componentDidMount() {
    this.getBacon();
    this.props.navigation.setParams({ copyToClipboard: this.copyToClipboard });
  }

  copyToClipboard = () => {
    const dataToStr = this.state.data
      .map(function(e) {
        return JSON.stringify(e);
      })
      .join("\r\n");

    Clipboard.setString(dataToStr);
    this.props.navigation.setParams({ title: "Copied to Clipboard" });
  };

  render() {
    if (this.state.data) {
      return (
        <ScrollView style={styles.container}>
          {this.state.data.map((el, i) => {
            return (
              <Text
                key={i++}
                accessibilityLabel={"Bacon Ipsum Text"}
                style={styles.paras}
              >
                {el}
              </Text>
            );
          })}
        </ScrollView>
      );
    } else {
      return (
        <ActivityIndicator
          size="large"
          color={Colors.loadingAni}
          style={styles.loader}
        />
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 25
  },
  clipboard: {
    margin: 10,
    padding: 5
  },
  paras: {
    padding: 10
  },
  loader: {
    justifyContent: "center"
  }
});
