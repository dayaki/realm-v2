import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import BottomTabs from "./BottomTabs";

// Screens
import Landing from "./screens/Landing";
import Register from "./screens/Register";
import Test from "./screens/Test";

const AuthStack = createStackNavigator({
  Login: {
    screen: Landing
  },
  Register: Register
});

const AppNavigator = createSwitchNavigator(
  {
    Landing: AuthStack,
    Tabs: BottomTabs
  },
  {
    initialRouteName: "Landing",
    defaultNavigationOptions: {
      headerShown: false
    }
  }
);

export default createAppContainer(AppNavigator);
