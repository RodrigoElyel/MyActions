import Routes from "./src/routes";
import FlashMessage from "react-native-flash-message";

// Fonts
import {
  useFonts,
  Urbanist_400Regular,
  Urbanist_400Regular_Italic,
  Urbanist_700Bold,
  Urbanist_300Light,
} from "@expo-google-fonts/urbanist";

export default function App() {
  const [fontsLoaded] = useFonts({
    Urbanist_400Regular,
    Urbanist_400Regular_Italic,
    Urbanist_700Bold,
    Urbanist_300Light,
  });

  if (!fontsLoaded) {
    return <></>;
  }

  return (
    <>
      <Routes />
      <FlashMessage position="top" />
    </>
  );
}
