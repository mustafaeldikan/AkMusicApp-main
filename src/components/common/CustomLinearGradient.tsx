import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleProp, ViewStyle } from "react-native";
import COLORS from "@/src/themes/colors";

interface ICustomLinearGradientProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  colors?: readonly [string, string, ...string[]];
}

const CustomLinearGradient = (props: ICustomLinearGradientProps) => {
  const {
    children,
    style = { flex: 1 },
    colors = [
      COLORS.steelGray,
      COLORS.wineRed,
      COLORS.darkCaramel,
      COLORS.pitchBlack,
    ],
  } = props;
  return (
    <LinearGradient colors={colors} style={style}>
      {children}
    </LinearGradient>
  );
};

export default CustomLinearGradient;
