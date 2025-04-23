import { Link } from "expo-router";
import { Text, View } from "react-native";
import SearchBar from "../components/SearchBar";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView>
      <SearchBar />
      <View className="flex-1 justify-center items-center">
        <Text className="text-5xl">
          Edit app/index.tsx to edit this screen.
        </Text>
        <Link href={"/profile"}>Go to profile</Link>
      </View>
    </SafeAreaView>
  );
}
