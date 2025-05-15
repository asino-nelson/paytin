import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import data from '../../assets/data.json'

const QuickSend = () => {
    return (
        <View className='w-full flex-col items-center justify-center my-4 bg-white px-3 py-2 rounded-3xl'>
            <View className='flex-row w-full items-center justify-between p-2'>
                <Text className='text-xl font-bold'>Quick Send</Text>
                <TouchableOpacity className='flex-row items-center justify-between'>
                    <Text className='font-semibold'>See all </Text>
                    <Ionicons name="chevron-forward-outline" size={15} color="black" />
                </TouchableOpacity>
            </View>
            <FlatList
                data={data.quick_send}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.name}
                contentContainerStyle={{
                    width: '100%',
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
                renderItem={({ item }) => (
                    <TouchableOpacity className='p-1 items-center justify-center'>
                        <Image
                            source={{ uri: item.avatar }}
                            className='w-14 h-14 rounded-full mb-1'
                        />
                        <Text className='text-sm text-gray-500 font-semibold'>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default QuickSend