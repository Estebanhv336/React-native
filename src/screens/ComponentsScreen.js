import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const name = "Esteban";
  return (
    <View>
      <Text style={styles.textStyle}>This is the components screen!</Text>
      <Text style={styles.textStyle}>Getting started with React Native!</Text>
      <Text style={NmaeStyle.Name}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

const NmaeStyle = StyleSheet.create({
  Name: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
