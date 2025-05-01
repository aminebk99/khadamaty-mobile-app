import { View, Text } from "react-native"; // ✅ Added Text
import SearchBar from "../components/SearchBar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Cards } from "../components/Cards";

export default function Index() {
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="px-5">
        <SearchBar />
        <View className="my-4">
          <Text className="mb-2 font-semibold text-xl">
            Toutes les Categories
          </Text>
          <Text className="text-sm text-gray-500">
            155788 annonces, Toutes les Régions
          </Text>
        </View>
        <View>
          <Cards />
        </View>
      </View>
    </SafeAreaView>
  );
}
