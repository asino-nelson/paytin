import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import data from '../../assets/data.json'

const SpendingCard = () => {
    return (
        <View className='bg-black max-w-1/2 rounded-3xl p-5'>
            <View className='flex-1 flex-row items-center justify-between'>
                <View className='flex-row w-full items-center py-2'>
                    <Ionicons name='trending-down-sharp' size={16} color="#84CC16" />
                    <Text className='text-lg font-bold text-lime-500'> Spending</Text>
                </View>
                <TouchableOpacity className='w-9 h-9 items-center p-3 rounded-full bg-lime-500'>
                    <Ionicons name="ellipsis-horizontal-outline" size={12} color="black" />
                </TouchableOpacity>
            </View>

            <Text className='font-bold text-gray-300 text-3xl my-2'>${data.statistics.spending.total}</Text>

            <Ionicons name="stats-chart-outline" size={50} color="white" />


            <View className='flex-row items-center justify-between mt-4 pt-4 '>
                <View className='flex-row items-center justify-between'>
                    <Text className='text-gray-300 font-bold'>Debit Card - </Text>
                    <Text className='text-gray-300 font-bold'>${data.statistics.spending.breakdown.debit_card}</Text>
                </View>
                <View className='flex-row items-center justify-between'>
                    <Text className='text-gray-300 font-bold'>Credit Card - </Text>
                    <Text className='text-gray-300 font-bold'>${data.statistics.spending.breakdown.credit_card}</Text>
                </View>
            </View>

        </View>
    )
}

export default SpendingCard