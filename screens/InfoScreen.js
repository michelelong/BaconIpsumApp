import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
  Platform,
  Image
} from "react-native";
import { Icon } from "expo";

import { Colors, Fonts, Sizes } from "../components/Constants";

export default class InfoScreen extends React.Component {
  static navigationOptions = () => {
    return {
      headerRight: (
        <Image source={require("../assets/images/header-icon.png")} />
      ),
      headerTitle: "Info"
    };
  };

  handleOnPress = url => {
    Linking.canOpenURL(url)
      .then(supported => {
        if (!supported) {
          console.log("Can't handle url: " + url);
        } else {
          return Linking.openURL(url);
        }
      })
      .catch(err => console.error("An error occurred", err));
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.titleText}>Paragraphs:</Text>
          <Text>Number of paragraphs, defaults to 5.</Text>
        </View>
        <View>
          <Text style={styles.titleText}>All Meat:</Text>
          <Text>All meat, all the time.</Text>
        </View>
        <View>
          <Text style={styles.titleText}>Meat and Filler:</Text>
          <Text>Meat mixed with ‘lorem ipsum’ filler.</Text>
        </View>
        <View>
          <Text style={styles.titleText}>Start with Lorem:</Text>
          <Text>Start with ‘Bacon ipsum dolor sit amet’.</Text>
        </View>
        <View>
          <Text style={styles.titleText}>Make it Spicy: </Text>
          <Text>Throw in some hot peppers.</Text>
        </View>
        <View>
          <Text style={styles.titleText}>Contact Me:</Text>
        </View>
        <View style={styles.contact}>
          <TouchableOpacity
            onPress={() => this.handleOnPress("http://twitter.com/CodeGeekATX")}
            accessibilityLabel={"Contact on Twitter"}
            style={styles.links}
          >
            <Icon.Ionicons
              name={"logo-twitter"}
              size={Sizes.socialIcon}
              color={Colors.linkIcons}
              style={styles.contactIcons}
            />
            <Text style={styles.linkText}>@CodeGeekATX</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.handleOnPress("mailto:pete@petenelson.com")}
            accessibilityLabel={"Contact via Email"}
            style={styles.links}
          >
            <Icon.Ionicons
              name={Platform.OS === "ios" ? "ios-mail" : "md-mail"}
              size={Sizes.socialIcon}
              color={Colors.linkIcons}
              style={styles.contactIcons}
            />
            <Text style={styles.linkText}>pete@petenelson.com</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: 20,
    marginLeft: 20,
    justifyContent: "space-around"
  },
  titleText: {
    fontWeight: Fonts.optionInfoWeight,
    fontSize: Fonts.optionInfoText
  },
  contact: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  contactIcons: {
    textAlign: "center"
  },
  links: {
    backgroundColor: Colors.linkBG,
    padding: 5
  },
  linkText: {
    color: Colors.linkText
  }
});
