import { View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'
import { router, useLocalSearchParams, usePathname } from 'expo-router'
import { Ionicons, Feather } from '@expo/vector-icons' // Import icon sets

const SearchBar = () => {
  const path = usePathname();
  const params = useLocalSearchParams<{ query?: string }>();
  const [search, setSearch] = useState(params.query);

  const debouncedSearch = useDebouncedCallback(
    (text: string) => router.setParams({ query: text }),
    500,
   
  );

  const handleSearch = (text: string) => {
    setSearch(text);
    debouncedSearch(text);
  };

  return (
    <View className="flex flex-row items-center justify-between w-full px-4 rounded-lg bg-accent-100 border border-primary-100 mt-5 py-2">
      <View className="flex-1 flex flex-row items-center justify-start z-50">
        <Ionicons name="search-outline" size={20} color="#9ca3af" style={{ marginRight: 8 }} />
        <TextInput
          value={search}
          onChangeText={handleSearch}
          placeholder="Search..."
          className="text-sm text-black-300 flex-1"
        />
      </View>
      <TouchableOpacity>
      <Ionicons name="filter-outline" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
