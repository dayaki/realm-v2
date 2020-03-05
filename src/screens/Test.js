import React, { useState } from "react";
// import { TapGestureHandler, State } from "react-native-gesture-handler";
import {
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback
} from "react-native";
// import Animated from "react-native-reanimated";
// const { event, Value, cond, eq } = Animated;

const Test = () => {
  const animation = new Animated.Value(150);
  //   const animatedHeight = new Animated.Value(150);

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1500
    }).start();
  };

  const animate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["10%", "50%"]
  });

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, { height: animate }]}>
          <Animated.Text>Hello Animation</Animated.Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  box: {
    backgroundColor: "tomato",
    width: 150,
    // height: 150,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Test;
