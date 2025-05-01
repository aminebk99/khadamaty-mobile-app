import { View } from "react-native";
import SearchBar from "../components/SearchBar";
import { SafeAreaView } from "react-native-safe-area-context";
import Slide from "../components/Slide";
import ServicesCard from "../components/ServicesCard";

export default function Index() {
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="px-5">
        <SearchBar />
        <Slide />
        <View>
          <ServicesCard />
        </View>
      </View>
    </SafeAreaView>
  );
}
