import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ImageDetail from "../Components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail title="Forest" />
      <ImageDetail title="Beach" />
      <ImageDetail title="Mountain" />
    </View>
  );
};

const style = StyleSheet.create({});

export default ImageScreen;
