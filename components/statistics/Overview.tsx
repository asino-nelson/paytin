import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { BarChart } from "react-native-gifted-charts";
import { Ionicons } from '@expo/vector-icons';

const Overview = () => {


    const stackData = [
        {
            label: 'Jan',
            stacks: [
                { value: 800, color: '#121212' },
                { value: 1200, color: '#84CC16', marginBottom: 2 }
            ]
        },
        {
            label: 'Feb',
            stacks: [
                { value: 1000, color: '#121212' },
                { value: 1500, color: '#84CC16', marginBottom: 2 }
            ]
        },
        {
            label: 'Mar',
            stacks: [
                { value: 900, color: '#121212' },
                { value: 1800, color: '#84CC16', marginBottom: 2 }
            ]
        },
        {
            label: 'Apr',
            stacks: [
                { value: 1100, color: '#121212' },
                { value: 2000, color: '#84CC16', marginBottom: 2 }
            ]
        },
        {
            label: 'May',
            stacks: [
                { value: 1150, color: '#121212' },
                { value: 2410, color: '#84CC16', marginBottom: 2 }
            ]
        },
        {
            label: 'Jun',
            stacks: [
                { value: 950, color: '#121212' },
                { value: 1800, color: '#84CC16', marginBottom: 2 }
            ]
        }
    ];



    return (
        <View>
            <View className='flex-row justify-between items-center my-4'>
                <Text className='font-bold text-2xl'>Overview</Text>
                <TouchableOpacity className='w-16 h-11 justify-center items-center rounded-full bg-white'>
                    <Ionicons name="options-outline" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <View className='bg-white p-5 rounded-3xl w-full mt-2'>
                <View className='flex-row items-center justify-between my-3'>
                    <View>
                        <Text className='text-gray-700 font-bold'>Total Balance</Text>
                        <Text className='font-bold text-2xl my-2'>$25,453.00</Text>
                    </View>
                    <View className='items-end justify-center gap-y-2'>
                        <View className='flex-row items-center'>
                            <Text className='text-gray-700 text-xs font-bold'>Debit Card Spending</Text>
                            <View className='w-4 h-4 bg-lime-500 rounded ml-2' />
                        </View>
                        <View className='flex-row items-center'>
                            <Text className='text-gray-700 text-xs font-bold'>Credit Card Spending</Text>
                            <View className='w-4 h-4 bg-black rounded ml-2' />
                        </View>
                    </View>
                </View>

                <BarChart
                    width={270}
                    noOfSections={5}
                    stackData={stackData}
                    barBorderRadius={5}
                    isAnimated
                    frontColor="#A2E837"
                    barWidth={25}
                    maxValue={3500}
                />

            </View>


        </View>
    )
}

export default Overview