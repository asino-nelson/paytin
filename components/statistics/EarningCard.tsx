import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import data from '../../assets/data.json'

const EarningCard = () => {
    return (
        <View className='bg-lime-500 max-w-1/2 rounded-3xl p-5'>
            <View className='flex-1 flex-row items-center justify-between'>
                <View className='flex-row w-full items-center py-2'>
                    <Ionicons name='trending-up-sharp' size={16} color="black" />
                    <Text className='text-lg font-bold'> Earning</Text>
                </View>
                <TouchableOpacity className='w-9 h-9 items-center p-3 rounded-full bg-black'>
                    <Ionicons name="ellipsis-horizontal-outline" size={12} color="white" />
                </TouchableOpacity>
            </View>

            <Text className='font-bold text-3xl my-2'>{data.statistics.earning.percentage}%</Text>

            <Text className='text-gray-700'>Your current monthly earning is increased by {data.statistics.earning.percentage}% compared to last month.</Text>
            <View className='flex-row items-center justify-between mt-4 pt-4 border-gray-500/40 border-t '>
                <Text className='font-bold'>Goal</Text>
                <View className='flex-row items-center'>
                    <Text className='text-black font-bold'>${data.statistics.earning.goal}/</Text>
                    <Text className='text-gray-300 font-bold'>${data.statistics.earning.goal_target}</Text>
                </View>
            </View>

        </View>
    )
}

export default EarningCard