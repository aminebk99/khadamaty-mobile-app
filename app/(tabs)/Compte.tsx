import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Compte = () => {
  return (
    <SafeAreaView>
      <View className="w-full h-full bg-white flex items-center justify-center">
        <View className="w-full h-20 bg-gray-300 justify-center">
          <Link className="mr-6" href={"/profile"}>Profile</Link>
          <Link className="mr-6" href={"/profile"}>Profile</Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Compte;
