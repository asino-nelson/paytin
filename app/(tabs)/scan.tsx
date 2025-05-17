import { View, Text } from 'react-native'
import React from 'react'
import { useCameraPermissions } from 'expo-camera'

const scan = () => {
    const [permission, requestPermission] = useCameraPermissions()
  return (
    <View>
      <Text>scan</Text>
    </View>
  )
}

export default scan