import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import data from '../../assets/data.json'
import { Ionicons } from '@expo/vector-icons'


const ActionItems = () => {
  return (
    <View>
      <FlatList
        data={data.actions}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.name}
        scrollEnabled={false}
        contentContainerStyle={{
          width: '100%',
          paddingVertical: 5,
          alignItems: 'start',
          justifyContent: 'space-between',
        }}
        renderItem={({ item }) => (
          <TouchableOpacity className='bg-white w-24 h-24 p-2 items-center justify-center rounded-full'>
            <Ionicons name={item.icon} size={24} color="black" />
            <Text className='text-base font-semibold'>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>

  )
}

export default ActionItems
