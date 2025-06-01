import { useEffect, useState } from "react";
import { Redirect } from "expo-router";
import { View, ActivityIndicator } from "react-native";
import COLORS from "@/src/themes/colors";

const Index = () => {
  const [isLogin, setIsLogin] = useState<boolean | null>(null);

  useEffect(() => {
    // Simulate checking authentication status
    // You can replace this with actual auth logic
    const checkAuthStatus = async () => {
      try {
        // Add your authentication check logic here
        // For now, defaulting to logged in state
        setIsLogin(true);
      } catch (error) {
        setIsLogin(false);
      }
    };

    checkAuthStatus();
  }, []);

  // Show loading spinner while checking auth status
  if (isLogin === null) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: COLORS.darkGray }}>
        <ActivityIndicator size="large" color={COLORS.offWhite} />
      </View>
    );
  }

  // Redirect based on authentication status
  if (isLogin) {
    return <Redirect href="/(main)/home" />;
  } else {
    return <Redirect href="/(auth)" />;
  }
};

export default Index;
