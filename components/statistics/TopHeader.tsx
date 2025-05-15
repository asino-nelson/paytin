import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const TopHeader = () => {
  return (
    <View className='flex-row items-center justify-between'>
          <TouchableOpacity className='w-14 items-center p-3 rounded-full bg-white'>
            <Ionicons name="arrow-back-outline" size={26} color="black" />
          </TouchableOpacity>
          <Text className='font-bold text-2xl'>Statistics</Text>
          <TouchableOpacity className='w-14 items-center p-3 rounded-full bg-white'>
            <Ionicons name="ellipsis-horizontal-outline" size={26} color="black" />
          </TouchableOpacity>
        </View>
  )
}

export default TopHeader