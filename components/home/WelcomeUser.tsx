import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import data from '../../assets/data.json'
import { Ionicons } from '@expo/vector-icons'

const WelcomeUser = () => {
    return (
        <View className='w-full flex-row items-center justify-between'>
            <View className='flex-row items-center'>
                <Image
                    source={{ uri: data.user.profile_picture }}
                    className='w-16 h-16 rounded-full'
                />
                <View className='ml-4 items-start'>
                    <Text className='font-medium text-lg'>{data.user.name}</Text>
                    <Text className='font-bold text-2xl'>Welcome Back 👋</Text>
                </View>
            </View>
            <TouchableOpacity className='px-4 py-2 rounded-full items-center justify-center bg-white'>
                <Ionicons name="notifications-outline" size={26} color="black" />
            </TouchableOpacity>

        </View>
    )
}

export default WelcomeUser