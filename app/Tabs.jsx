import React from "react";
import Panduan from "./Panduan";
import Home from "./Home";
import Alarm from "./Alarm";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";

const Tab = createBottomTabNavigator();
const Tabs = () => {
  const btnList = [
    {
      id: "Panduan",
      component: Panduan,
      icon: (
        <MaterialCommunityIcons name="tooth-outline" size={30} color="black" />
      ),
    },
    {
      id: "Home",
      component: Home,
      icon: <AntDesign name="home" size={30} />,
    },
    {
      id: "Alarm",
      component: Alarm,
      icon: <MaterialIcons name="access-alarm" size={25} />,
    },
  ];

  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarStyle: { elevation: 20 } }}
    >
      {btnList.map((list, index) => (
        <Tab.Screen
          key={index}
          name={list.id}
          component={list.component}
          options={{
            tabBarShowLabel: false,
            tabBarStyle: {
              height: 60,
              elevation: 10,
              shadowColor: "black",
              shadowOffset: { x: 0, y: -10 },
              borderTopEndRadius: 20,
              borderTopStartRadius: 20,
            },
            tabBarIcon: ({ focused }) => {
              return (
                // <TouchableOpacity
                //   style={{ alignItems: "center", justifyContent: "center" }}
                // >
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    // shadowOffset: { width: 0, height: -10 },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                  }}
                >
                  <View
                    style={
                      focused
                        ? {
                            backgroundColor: "#00B4D8",
                            alignItems: "center",
                            justifyContent: "center",
                            width: 60,
                            height: 60,
                            borderRadius: 100,
                            borderWidth: 4,
                            borderColor: "white",
                            elevation: 5,
                            shadowRadius: 3.84,
                            padding: 10,
                            shadowOpacity: 0.1,
                          }
                        : { alignItems: "center" }
                    }
                  >
                    {list.icon}
                  </View>

                  <Text
                    style={
                      focused
                        ? {
                            textAlign: "center",
                            marginBottom: 20,
                          }
                        : { display: "none" }
                    }
                  >
                    {list.id}
                  </Text>
                </View>
                // </TouchableOpacity>
              );
            },
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default Tabs;
