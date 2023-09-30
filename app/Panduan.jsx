import { View, Text } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const Panduan = () => {
  return (
    <LinearGradient colors={["#00B4D8", "white"]}>
      <View style={{ height: "100%" }}>
        <Text>Panduan</Text>
      </View>
    </LinearGradient>
  );
};

export default Panduan;
