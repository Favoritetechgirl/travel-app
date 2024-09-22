import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import color from '@/constants/color';
import {useHeaderHeight} from '@react-navigation/elements';
import { SearchBar } from 'react-native-screens';
import CategoryButtons from '@/components/CategoryButtons';
import Listings from '@/components/Listings';
import listingData from '@/data/destination.json';
import GroupListings from '@/components/GroupListings';
import groupData from '@/data/groups.json';

const Page = () => {
    const headerHeight = useHeaderHeight();
    const [category, setCategory] = useState('All');

    const onCatChanged = (category: string) => {
        setCategory(category);
    }

  return (
    <>
    <Stack.Screen
    options={{
        headerTransparent: true,
        headerTitle: "",
        headerLeft: () => (
            <TouchableOpacity onPress={() => {}} style={{ marginLeft: 20}}>
                <Image
                source={{
                    uri: "https://images.unsplash.com/photo-1665686304312-16e3a16be0ed?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }}
            style={{ width: 40, borderRadius: 10}}
                />
            </TouchableOpacity>
        ),
        headerRight: () => {
            return <TouchableOpacity onPress={() => { } } style={{
                marginRight:20,
                backgroundColor: color.white,
                padding: 10,
                borderRadius:10,
                shadowColor: "#171717",
                shadowOffset: {width: 2, height: 4},
                shadowOpacity: 0.2,
                shadowRadius: 3,
            }}>
                <Ionicons name="notifications" size={20} color={color.black} />
            </TouchableOpacity>
        },
    }}
    />
    <View style={[styles.container, {paddingTop: headerHeight}]}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.headingTxt}>Explore The Beautiful World!</Text>

        <View style={styles.searchSectionWrapper}>
            <View style={styles.searchBar}>
                <Ionicons name='search' size={18} style={{marginRight:10}} color={color.black}/>
                <TextInput placeholder='Search...'/>
            </View>
            <TouchableOpacity onPress={() => {}} style={styles.filterBtn}>
                <Ionicons name='options' size={28} color={color.white}/>
            </TouchableOpacity>
        </View>
        <CategoryButtons onCategoryChanged={onCatChanged}/>
        <Listings listings={listingData} category={category}/>
        
        <GroupListings 
        //@ts-ignore
        listings={groupData}/>
        </ScrollView>
    </View>
    </>
  );
};

export default Page

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingHorizontal: 20,
        backgroundColor: color.bgColor
    },
    headingTxt: {
        fontSize: 28,
        fontWeight: '800',
        color: color.black,
        marginTop: 10,
    },
    searchSectionWrapper: {
        flexDirection: 'row',
        marginVertical: 20,
    },
    searchBar: {
        flex:1,
        flexDirection: 'row',
        backgroundColor: color.white,
        padding: 16,
        borderRadius: 10,
    },
    filterBtn: {
        backgroundColor: color.primaryColor,
        padding: 12,
        borderRadius: 10,
        marginLeft: 20,
    }
})