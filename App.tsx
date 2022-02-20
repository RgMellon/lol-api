import { ThemeProvider } from "styled-components";

import { Welcome } from "./src/pages/Welcome";

import theme from "./src/styles/";

import AppLoading from "expo-app-loading";

import {
  useFonts,
  Rajdhani_400Regular,
  Rajdhani_700Bold,
  Rajdhani_300Light,
  Rajdhani_500Medium,
} from "@expo-google-fonts/rajdhani";

export default function App() {
  const [fontsLoaded] = useFonts({
    Rajdhani_400Regular,
    Rajdhani_700Bold,
    Rajdhani_300Light,
    Rajdhani_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ThemeProvider theme={theme.main}>
      <Welcome />
    </ThemeProvider>
  );
}
