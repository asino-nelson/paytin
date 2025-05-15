import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import data from '../../assets/data.json'
import { Ionicons } from '@expo/vector-icons'

const Card = () => {
    return (
        <View>
            <TouchableOpacity className='absolute z-50 right-0 top-4 flex-row w-40 items-center bg-lime-300 p-3 rounded-tr-3xl rounded-bl-3xl'>
                <Ionicons name="add-circle-sharp" size={26} color="black" />
                <Text className='font-semibold text-sm ml-1'>Set Budget</Text>
            </TouchableOpacity>
            <View className='bg-lime-950 rounded-3xl p-5 my-4 flex-col items-start justify-between h-60'>
                <Text className='text-white font-extrabold uppercase'>{data.user.card.type}</Text>
                <View className='flex-1 w-full'>
                    <View className='flex-1 flex-col items-start justify-around w-full'>
                        <View>
                            <Text className='text-gray-400 text-sm mb-1'>Balance</Text>
                            <Text className='text-gray-200 text-3xl font-bold'>${data.user.card.balance}.00</Text>
                        </View>
                        <Text className='text-gray-300 font-semibold'>{data.user.card.number}</Text>
                        <View className='flex-row items-center justify-between w-full'>
                            <Text className='text-gray-400'>{data.user.name}</Text>
                            <Text className='text-gray-400'>Exp {data.user.card.expiry}</Text>
                        </View>
                    </View>
                    <View className='absolute -bottom-24 -right-16 z-10'>
                        <Ionicons name="logo-apple-ar" size={200} color="rgba(255, 255, 255, 0.1)" />
                    </View>
                </View>



            </View>
        </View>

    )
}

export default Card