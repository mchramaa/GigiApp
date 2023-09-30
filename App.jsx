import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./app/Tabs";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: "white",
  },
});
