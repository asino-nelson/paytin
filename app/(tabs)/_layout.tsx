import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        headerShadowVisible: false,
        // tabBarActiveTintColor: "#D9F99D",
        // tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: '#1A2E05',
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <Ionicons
            size={28}
            name={focused ? 'home' : 'home-outline'}
            color="black"
          />,
        }}
      />
      <Tabs.Screen
        name="scan"
        options={{
          title: 'Scan',
          tabBarIcon: ({ focused }) => <Ionicons
            size={28}
            name={focused ? 'scan-circle' : 'scan-circle-outline'}
            color="black"
          />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Stats',
          tabBarIcon: ({ focused }) => <Ionicons size={28} name={focused ? 'trophy' : 'trophy-outline'} color="black" />,
        }}
      />
    </Tabs>
  );
}
