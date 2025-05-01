import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'
import { router, useLocalSearchParams, usePathname } from 'expo-router'

const SearchBar = () => {
  const path = usePathname();
  const params = useLocalSearchParams<{ query ?: string }>();
  const [search, setSearch] = useState(params.query );

  const debouncedSearch = useDebouncedCallback((text: string) => router.setParams({ query: text }), 500, [search]);

  const handleSearch = (text: string) => {
    setSearch(text);
    debouncedSearch(text);
  }
  return (
    <View className='flex flex-row items-center justify-between w-full px-4 rounded-lg bg-accent-100 border border-primary-100 mt-5 py-2'> 
    <View className='flex-1 flex flex-row items-center justify-start z-50'>
      <TextInput 
      value={search}
      onChangeText={handleSearch}
      placeholder='Search...'
      className='text-sm text-black-300 ml-2 flex-1'
      />
    </View>
    <TouchableOpacity>
      <Text className='text-sm text-primary-100 font-semibold'>Filter</Text>
    </TouchableOpacity>
    </View>
  )
}

export default SearchBar