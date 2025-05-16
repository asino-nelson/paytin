import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import data from '../../assets/data.json'

const RecentActivity = () => {
    return (
        <View>
            <View className='flex-row w-full items-center justify-between py-2'>
                <Text className='text-xl font-bold'>Recent Activity</Text>
                <TouchableOpacity className='flex-row items-center justify-between'>
                    <Text className='font-semibold'>See all </Text>
                    <Ionicons name="chevron-forward-outline" size={15} color="black" />
                </TouchableOpacity>
            </View>
            <View className='w-full bg-white rounded-3xl px-3'>
                <FlatList
                    data={data.recent_activity}
                    keyExtractor={(item) => item.title}
                    scrollEnabled={false}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        width: '100%',
                        paddingVertical: 5,
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        borderRadius: 16,
                    }}
                    renderItem={({ item }) => (
                        <TouchableOpacity className='items-center justify-around w-full flex-row py-4 px-3 border-b border-gray-200'>
                            <View className='w-12 h-12 rounded-full bg-gray-800 items-center justify-center'>
                                <Ionicons name={item.icon} size={20} color="white" />
                            </View>
                            <View className='flex-1 items-start justify-center ml-4'>
                                <Text className='text-lg font-semibold'>{item.title}</Text>
                                <Text className='text-xs text-gray-400 font-semibold'>{item.date}</Text>
                            </View>
                            <View className='mx-2 items-end justify-center'>
                                <Text className='text-xl font-extrabold'>-${item.amount}.00</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>

        </View>
    )
}

export default RecentActivity