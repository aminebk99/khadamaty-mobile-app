
import { View } from "react-native";
import SearchBar from "../components/SearchBar";
import { SafeAreaView } from "react-native-safe-area-context";
import ServicesCard from "../components/servicesCard";
import Slide from "../components/Slide";

export default function Index() {
  return (
    <SafeAreaView>
      <SearchBar />
      <Slide />
      <View>
        <ServicesCard />
      </View>
    </SafeAreaView>
  );
}
