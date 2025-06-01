import React, { useEffect, useState } from "react";
import { useRouter } from "expo-router";

const RootNavigation = () => {
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (isLogin) {
      router.replace("/(main)/home");
    } else {
      router.replace("/(auth)");
    }
  }, [isLogin]);

  return null; // Don't render anything
};

export default RootNavigation;
