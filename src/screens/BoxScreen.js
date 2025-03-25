import React from "react";
import { Text, StyleSheet, View } from "react-native";

const BoxScreen = () => {
  return (
    <View style={style.view}>
      <Text style={style.viewOneStyle}></Text>
      <Text style={style.viewTwoStyle}></Text>
      <Text style={style.viewThreeStyle}></Text>
    </View>
  );
};

const style = StyleSheet.create({
  view: {
    borderWidth: 3,
    borderColor: "black",
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  viewOneStyle: {
    width: 50,
    height: 50,
    backgroundColor: "red",
  },
  viewTwoStyle: {
    width: 50,
    height: 50,
    backgroundColor: "blue",
    alignSelf: "flex-end",
  },
  viewThreeStyle: {
    width: 50,
    height: 50,
    backgroundColor: "green",
  },
});

export default BoxScreen;
