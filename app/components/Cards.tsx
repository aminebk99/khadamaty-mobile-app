import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  useWindowDimensions,
} from "react-native";

// Dummy data
const CARD_DATA = Array.from({ length: 12 }).map((_, i) => ({
  id: i.toString(),
  image:
    "https://adoptostaging.blob.core.windows.net/media/plumber-job-description-template-tQh1-P.jpg",
  title:
    i === 0
      ? "Professional Plumbing Services"
      : "Long Title Example That Will Be Trimmed",
  description:
    i === 0
      ? "Experienced plumber offering quality services at affordable prices with quick response."
      : "This is a longer description intended to demonstrate text truncation with ellipsis for mobile layout in card component.",
}));

export const Cards = () => {
  const { width } = useWindowDimensions();

  // Responsive number of columns based on screen width
  const numColumns = width > 600 ? 3 : 2;
  const horizontalSpacing = 24;
  const cardSpacing = 12;
  const cardWidth =
    (width - horizontalSpacing - (numColumns - 1) * cardSpacing) / numColumns;

  return (
    <FlatList
      contentContainerStyle={[styles.container, { paddingHorizontal: horizontalSpacing / 2 }]}
      data={CARD_DATA}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Card {...item} cardWidth={cardWidth} />}
      numColumns={numColumns}
      columnWrapperStyle={{ justifyContent: "space-between", marginBottom: cardSpacing }}
      showsVerticalScrollIndicator={false}
      initialNumToRender={6}
      maxToRenderPerBatch={10}
      removeClippedSubviews
    />
  );
};

type CardProps = {
  image: string;
  title: string;
  description: string;
  cardWidth: number;
};

export const Card = ({ image, title, description, cardWidth }: CardProps) => {
  return (
    <View style={[styles.card, { width: cardWidth }]}>
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
    backgroundColor: "#f3f4f6",
    paddingTop: 12,
    paddingBottom: 24,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    overflow: "hidden",
    elevation: 3,
    shadowColor: "#000",
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
    color: "#4b5563",
    fontSize: 12,
    marginTop: 4,
  },
});
