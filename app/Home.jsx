import { View, Text } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const Home = () => {
  return (
    <LinearGradient colors={["#00B4D8", "white"]}>
      <View style={{ height: "100%" }}>
        <Text>Home</Text>
      </View>
    </LinearGradient>
  );
};

export default Home;
