import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import Animated, { FadeIn } from "react-native-reanimated";

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <View className="flex-1 items-center justify-center bg-blue-100">
        <Text>Open up App.tsx gg to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
      <Animated.View entering={FadeIn.duration(500)}>
        <Text>🎉 Reanimated is working!</Text>
      </Animated.View>
    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
