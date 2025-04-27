import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useLocalSearchParams, usePathname } from 'expo-router'

const SearchBar = () => {
  // const path = usePathname();
  // const params = useLocalSearchParams<{ query?: string }>();
  // const [search, setSearch] = useState(params.query);

  // const handleSearch = (text: string) => {
  //   setSearch(text);
  // }
  return (

    <View className="flex flex-row items-center justify-between w-full px-4 rounded-lg bg-accent-100 border border-primary-100 mt-5 py-2">
      <View className='flex-1 flex flex-row items-center'>
        <TextInput
          // value={search}
          // onChangeText={handleSearch}
          placeholder='Search for anything'
          className='text-sm ml-2 flex-1'
        />
      </View>
    </View>

  )
}

export default SearchBar