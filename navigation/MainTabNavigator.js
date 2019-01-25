import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import { Icon } from "expo";

import { Colors, Fonts, Sizes } from "../components/Constants";
import HomeScreen from "../screens/HomeScreen";
import InfoScreen from "../screens/InfoScreen";
import IpsumScreen from "../screens/IpsumScreen";

const HomeStack = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Ipsum: { screen: IpsumScreen }
  },
  {
    defaultNavigationOptions: ({}) => ({
      tabBarLabel: "HOME",
      headerTitleStyle: {
        justifyContent: "center",
        marginLeft: "auto",
        marginRight: "auto",
        fontWeight: "bold",
        color: Colors.headerTitleText
      },
      headerStyle: {
        backgroundColor: Colors.headerBarBG
      }
    })
  }
);

const InfoStack = createStackNavigator(
  {
    Info: { screen: InfoScreen }
  },
  {
    tabBarLabel: "INFO",
    defaultNavigationOptions: ({}) => ({
      headerTitleStyle: {
        justifyContent: "center",
        marginLeft: "auto",
        marginRight: "auto",
        fontWeight: "bold",
        color: Colors.headerTitleText
      },
      headerStyle: {
        backgroundColor: Colors.headerBarBG
      }
    })
  }
);

export default createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    Info: { screen: InfoStack }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Info") {
          iconName =
            Platform.OS === "ios"
              ? "ios-information-circle"
              : "md-information-circle";
        } else if (routeName === "Home") {
          iconName = Platform.OS === "ios" ? "ios-settings" : "md-settings";
        }
        return (
          <Icon.Ionicons
            name={iconName}
            size={Sizes.tabBarIcon}
            color={tintColor}
            accessibilityLabel={routeName}
          />
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: Colors.activeTabIcons,
      inactiveTintColor: Colors.inactiveTabIcons,
      labelStyle: {
        fontSize: Fonts.tabLabelText
      }
    }
  }
);
