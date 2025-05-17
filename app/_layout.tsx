import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import "../global.css"


export default function RootLayout() {


  return (
    <>
      <Stack
        screenOptions={{
          statusBarBackgroundColor: "#D9F99D"
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </>
  );
}
