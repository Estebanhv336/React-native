import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: 22 },
    { name: "Friend #2", age: 23 },
    { name: "Friend #3", age: 24 },
    { name: "Friend #4", age: 25 },
    { name: "Friend #5", age: 26 },
    { name: "Friend #6", age: 27 },
    { name: "Friend #7", age: 28 },
    { name: "Friend #8", age: 29 },
    { name: "Friend #9", age: 30 },
  ];

  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.styleText}>
            {item.name} - age: {item.age}
          </Text>
        );
      }}
    />
  );
};
const styles = StyleSheet.create({
  styleText: {
    marginVertical: 50,
  },
});

export default ListScreen;
