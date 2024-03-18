import { Slot } from "expo-router";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";

export default function Layout() {
  // hook to verify if font was loaded before the application
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_500Medium,
  });
  if (!fontsLoaded) {
    return;
  }
  return fontsLoaded ? <Slot /> : null;
}

// Slot is used to repass all routers is inside of ./App
