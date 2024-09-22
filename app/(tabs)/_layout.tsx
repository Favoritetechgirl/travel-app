import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons'
import color from "@/constants/color"

export default function _layout() {
  return (
    <Tabs screenOptions={{
        tabBarStyle: {
            backgroundColor: color.bgColor,
            borderTopWidth: 0,
            padding: 0
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: color.black,
        tabBarInactiveTintColor: '#999'
    }}>
        <Tabs.Screen 
        name='index' 
        options={{
            tabBarIcon: ({color}) => (
            <Ionicons name="compass" size={28} color={color}/>
        ),
        }}/>
        <Tabs.Screen name="category"
        options={{
            tabBarIcon: ({color}) => (
            <MaterialIcons name="space-dashboard" size={28} color={color}/>
        ),
        }}/>
        <Tabs.Screen name='search'
        options={{
            tabBarIcon: ({color}) => (
                <View style={{
                    backgroundColor: "#ff7f36",
                    paddingHorizontal: 16,
                    paddingVertical: 12,
                    borderRadius:10,
                    height:50,
                    }}>
                <Ionicons name="search-outline" size={28} color="#FFFFFF"/>
                </View>
        ),
        }}/>
        <Tabs.Screen name='bookmarks'
        options={{
            tabBarIcon: ({color}) => (
            <Ionicons name="bookmarks" size={28} color={color}/>
        ),
        }}/>
        <Tabs.Screen name='profile'
        options={{
            tabBarIcon: ({color}) => (
            <FontAwesome name='user' size={28} color={color}/>
        ),
        }}/>
    </Tabs>
  )
}