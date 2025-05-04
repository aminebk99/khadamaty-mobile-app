import { View, StatusBar, Text, SafeAreaView } from "react-native";
import React from "react";

const profile = () => {
  return (
    <SafeAreaView>
      <View className="w-full  flex items-center justify-center bg-white">
        <View className="h-32 w-32 rounded-[50%] bg-gray-300 items-center justify-center">
          <Text>profile</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default profile;
