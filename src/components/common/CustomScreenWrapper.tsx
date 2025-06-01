import React from "react";
import { SafeAreaView, StyleProp, ViewStyle } from "react-native";
import CustomLinearGradient from "./CustomLinearGradient";

interface ICustomScreenWrapperProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const CustomScreenWrapper = (props: ICustomScreenWrapperProps) => {
  const { children, style = { flex: 1 } } = props;
  return (
    <SafeAreaView style={style}>
      <CustomLinearGradient>{children}</CustomLinearGradient>
    </SafeAreaView>
  );
};

export default CustomScreenWrapper;
