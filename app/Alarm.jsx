import { View, Text } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const Alarm = () => {
  return (
    <LinearGradient colors={["#00B4D8", "white"]}>
      <View style={{ height: "100%" }}>
        <Text>Alarm</Text>
      </View>
    </LinearGradient>
  );
};

export default Alarm;
