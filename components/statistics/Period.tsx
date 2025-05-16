import { View, FlatList, TouchableOpacity, Text } from 'react-native'
import React, { useState } from 'react'
import data from "../../assets/data.json"

interface PeriodItem {
    name: string;
}


const Period = () => {
    const [selected, setSelected] = useState("Today")

    const handlePress = (item: PeriodItem) => {
        setSelected(item.name)
        console.log(`${item.name} selected`);
    }

    const periodData = data?.statistics?.period || []

    return (
        <View>
            <FlatList
                data={periodData}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => item?.name || `item-${index}`}
                scrollEnabled={false}
                contentContainerStyle={{
                    width: '100%',
                    paddingVertical: 5,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => handlePress(item)}
                        style={{
                            width: 80,
                            height: 80,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: selected === item.name ? '#84CC16' : 'white',
                            borderRadius: 40,
                        }}
                    // className={`w-20 h-20 items-center justify-center ${selected === item.name ? "bg-lime-500" : "bg-white"}  rounded-full`}
                    >
                        <Text className='text-center font-semibold'>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default Period