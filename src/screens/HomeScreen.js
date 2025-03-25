import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen!</Text>
      <Button
        onPress={() => {
          navigation.navigate("Components");
        }}
        title="Go to Components Demo"
      />
      <Button
        title="Go to list Demo"
        onPress={() => {
          navigation.navigate("List");
        }}
      />
      <Button
        title="Go to Image Demo"
        onPress={() => {
          navigation.navigate("Image");
        }}
      />
      <Button
        title="Go To Counter Demo"
        onPress={() => {
          navigation.navigate("Counter");
        }}
      />
      <Button
        title="Go To Color Demo"
        onPress={() => {
          navigation.navigate("Color");
        }}
      />

      <Button
        title="Go to Square Demo"
        onPress={() => {
          navigation.navigate("Square");
        }}
      />
      <Button
        title="Go to Text Demo"
        onPress={() => navigation.navigate("Text")}
      />
      <Button
        title="Go to Box Demo"
        onPress={() => navigation.navigate("Box")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
