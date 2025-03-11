import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ImageDetail = ({ source, title, score }) => {
  return (
    <View>
      <Image source={source} />
      <Text>{title}</Text>
      <Text>Score: {score}</Text>
    </View>
  );
};

const style = StyleSheet.create({});

export default ImageDetail;
