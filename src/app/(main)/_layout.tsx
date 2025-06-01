import React from "react";
import { ITabInfo } from "@/src/types/common.types";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import COLORS from "@/src/themes/colors";
import { Tabs } from "expo-router";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const BottomTabs = () => {
  const renderHomeTabBarIcon = (tabInfo: ITabInfo) => {
    return tabInfo.focused ? (
      <Ionicons
        name="musical-notes"
        size={tabInfo.size}
        color={COLORS.offWhite}
      />
    ) : (
      <Ionicons
        name="musical-notes-outline"
        size={tabInfo.size}
        color={COLORS.offWhite}
      />
    );
  };

  const renderLibraryTabBarIcon = (tabInfo: ITabInfo) => {
    return tabInfo.focused ? (
      <MaterialCommunityIcons
        name="music-box-multiple"
        size={tabInfo.size}
        color={COLORS.offWhite}
      />
    ) : (
      <MaterialCommunityIcons
        name="music-box-multiple-outline"
        size={tabInfo.size}
        color={COLORS.offWhite}
      />
    );
  };

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.darkGray, // Custom background color
          // borderTopColor: 'transparent', // Hide the border top
          height: hp("5%"),
        },
        tabBarShowLabel: false,
        tabBarInactiveTintColor: COLORS.offWhite, // Inactive icon color
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: (tabInfo) => renderHomeTabBarIcon(tabInfo),
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          title: "Library",
          tabBarIcon: (tabInfo) => renderLibraryTabBarIcon(tabInfo),
        }}
      />
    </Tabs>
  );
};

export default BottomTabs;
