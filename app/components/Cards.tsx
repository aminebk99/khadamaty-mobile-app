import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";

const CARD_DATA = Array.from({ length: 12 }).map((_, i) => ({
  id: i.toString(),
  image:
    "https://adoptostaging.blob.core.windows.net/media/plumber-job-description-template-tQh1-P.jpg",
  title: i === 0
    ? "Professional Plumbing Services"
    : "Long Title Example That Will Be Trimmed",
  description:
    i === 0
      ? "Experienced plumber offering quality services at affordable prices with quick response."
      : "This is a longer description intended to demonstrate text truncation with ellipsis for mobile layout in card component.",
}));

const CARD_WIDTH = Dimensions.get("window").width / 2 - 16;

export const Cards = () => {
  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={CARD_DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Card {...item} />}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false} // Because we're wrapping in ScrollView
      />
    </ScrollView>
  );
};

type CardProps = {
  image: string;
  title: string;
  description: string;
};

export const Card = ({ image, title, description }: CardProps) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} resizeMode="cover" />
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
          {title}
        </Text>
        <Text style={styles.description} numberOfLines={2} ellipsizeMode="tail">
          {description}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f3f4f6", // Tailwind bg-gray-100

  },
  columnWrapper: {
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    marginBottom: 12,
    width: CARD_WIDTH,
    overflow: "hidden",
    elevation: 3, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  image: {
    width: "100%",
    height: 112,
  },
  textContainer: {
    padding: 12,
  },
  title: {
    color: "#000",
    fontWeight: "600",
    fontSize: 14,
  },
  description: {
    color: "#4b5563", // Tailwind text-gray-600
    fontSize: 12,
    marginTop: 4,
  },
});
