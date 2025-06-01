import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MusicDashboard from "../MusicDashboard";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import MusicPlayList from "../MusicPlayList";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const MusicBottomNavigator = () => {
  const Bottom = createBottomTabNavigator();
  return (
    <Bottom.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#1e1e1e", // Custom background color
          // borderTopColor: 'transparent', // Hide the border top
          height: hp("5%"),
        },
        tabBarShowLabel: false,
        tabBarInactiveTintColor: "#F6F5F2", // Inactive icon color
      }}
    >
      <Bottom.Screen
        name="MusicDashboard"
        component={MusicDashboard}
        options={{
          headerShown: false,
          tabBarIcon: (tabInfo) => {
            return tabInfo.focused ? (
              <Ionicons name="musical-notes" size={25} color={"#F6F5F2"} />
            ) : (
              <Ionicons
                name="musical-notes-outline"
                size={25}
                color={"#F6F5F2"}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="MusicPlayList"
        component={MusicPlayList}
        options={{
          headerShown: false,
          tabBarIcon: (tabInfo) => {
            return tabInfo.focused ? (
              <MaterialCommunityIcons
                name="music-box-multiple"
                size={25}
                color={"#F6F5F2"}
              />
            ) : (
              <MaterialCommunityIcons
                name="music-box-multiple-outline"
                size={25}
                color={"#F6F5F2"}
              />
            );
          },
        }}
      />
    </Bottom.Navigator>
  );
};

export default MusicBottomNavigator;
