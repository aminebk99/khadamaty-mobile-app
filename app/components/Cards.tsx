import { View, Text } from 'react-native'
import React from 'react'

export const Cards = () => {
  return (
    <View className='bg-white h-full'>
      {/* Horizontal layout for 2 cards */}
      <View className='flex-row flex-wrap justify-between'>
        <Card />
        <Card />
      </View>
    </View>
  )
}

export const Card = () => {
  return (
    <View className='bg-white shadow-sm rounded-lg p-4 m-1 w-[48%]'>
      <Text className='text-lg text-black font-bold'>Card Title</Text>
      <Text className='text-black'>Cards</Text>
    </View>
  )
}
