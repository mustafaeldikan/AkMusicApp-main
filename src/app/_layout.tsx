import { Stack } from "expo-router";
import { AudioProvider } from "../contexts/AudioContext";

const Layout = () => {
  return (
    <AudioProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(main)" />
      </Stack>
    </AudioProvider>
  );
};

export default Layout;
