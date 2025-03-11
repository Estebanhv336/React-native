import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ImageDetail from "../Components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        source={require("../../assets/forest.jpg")}
        score={9}
      />
      <ImageDetail
        title="Beach"
        source={require("../../assets/beach.jpg")}
        score={8}
      />
      <ImageDetail
        title="Mountain"
        source={require("../../assets/mountain.jpg")}
        score={7}
      />
    </View>
  );
};

const style = StyleSheet.create({});

export default ImageScreen;
