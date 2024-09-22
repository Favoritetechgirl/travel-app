import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams, useRouter } from 'expo-router'
import { ListingType } from '@/types/listingType';
import listingData from '@/data/destination.json';
import { Feather, FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';
import color from '@/constants/color';
import Animated, { interpolate, SlideInDown, useAnimatedRef, useAnimatedStyle, useScrollViewOffset } from 'react-native-reanimated';

const {width} = Dimensions.get('window');
const IMG_HEIGHT = 300;
const ListingDetails = () => {
  const {id} = useLocalSearchParams();

  //@ts-ignore
  const listing: ListingType = (listingData as ListingType[]).find(
    (item) => item.id === id
  );

  const router = useRouter();

  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);
  const imageAnimatedStyle = useAnimatedStyle(() => {
    return{
      transform:[
        {
          translateY: interpolate(
          scrollOffset.value, 
          [-IMG_HEIGHT, 0, IMG_HEIGHT], 
          [-IMG_HEIGHT/2, 0, IMG_HEIGHT * 0.75]
        ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-IMG_HEIGHT, 0, IMG_HEIGHT], 
            [2, 1, 1]
          )
        }
      ]
    }
  })
  return (
    <>
    <Stack.Screen options={{
      headerTransparent: true,
      headerTitle: "",
      headerLeft: () => (
        <TouchableOpacity 
          onPress={() => router.back ()} 
          style={{
          backgroundColor: "rgba(255, 255, 255, 0.5",
          padding: 4,
          borderRadius: 10,
        }}>
          <View style={{backgroundColor: color.white,padding:6,borderRadius:10,}}>
            <Feather name='arrow-left' size={20}/>
          </View>
        </TouchableOpacity>
  ),
  headerRight: () =>(
    <TouchableOpacity 
    onPress={() => {}} 
    style={{
    backgroundColor: "rgba(255, 255, 255, 0.5",
    padding: 4,
    borderRadius: 10,
  }}>
    <View style={{backgroundColor: color.white,padding:6,borderRadius:10,}}>
      <Ionicons name='bookmark-outline' size={20}/>
    </View>
  </TouchableOpacity>
  ),
    }}
    />
    <View style={styles.container}>
      <Animated.ScrollView ref={scrollRef} contentContainerStyle={{paddingBottom: 150}}>
      <Animated.Image 
      source={{uri: listing.image}} style={[styles.image, imageAnimatedStyle]}/>
      <View style={styles.contentWrapper}>
        <Text style={styles.listingName}>{listing.name}</Text>
        <View style={styles.listingLocationWrapper}>
          <FontAwesome5 name="map-marker-alt" size={18} color={color.primaryColor}/>
          <Text style={styles.listingLocationTxt}>{listing.location}</Text>
        </View>

        <View style={styles.highLightWrapper}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.highLightIcon}>
              <Ionicons name='time' size={18} color={color.primaryColor}/>
            </View>
            <View>
              <Text style={styles.highLightTxt}>Duration</Text>
              <Text style={styles.highLightTxtVal}>{listing.duration}</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.highLightIcon}>
              <FontAwesome name='users' size={18} color={color.primaryColor}/>
            </View>
            <View>
              <Text style={styles.highLightTxt}>Person</Text>
              <Text style={styles.highLightTxtVal}>{listing.duration}</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.highLightIcon}>
              <Ionicons name='star' size={18} color={color.primaryColor}/>
            </View>
            <View>
              <Text style={styles.highLightTxt}>Ratings</Text>
              <Text style={styles.highLightTxtVal}>{listing.rating}</Text>
            </View>
          </View>
        </View>

        <Text style={styles.listingDetails}>{listing.description}</Text>
      </View>
      </Animated.ScrollView>
    </View>

    <Animated.View style={styles.footer} entering={SlideInDown.delay(200)}>
      <TouchableOpacity onPress={() => {}} style={[styles.footerBtn, styles.footerBookBtn]}>
        <Text style={styles.footerBtnTxt}>Book Now</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}} style={styles.footerBtn}>
        <Text style={styles.footerBtnTxt}>${listing.price}</Text>
      </TouchableOpacity>
    </Animated.View>
    </>
  )
}

export default ListingDetails

const styles = StyleSheet.create({
  image: {
    width: width,
    height: IMG_HEIGHT,
  },
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  contentWrapper: {
    padding: 20,
    backgroundColor: color.white,
  },
  listingName: {
    fontSize: 24,
    fontWeight: '500',
    color: color.black,
    letterSpacing: 0.5,
  },
  listingLocationWrapper: {
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 10,
    alignItems: 'center'
  },
  listingLocationTxt: {
    fontSize: 14,
    marginLeft: 5,
    color: color.black
  },
  highLightWrapper: {
    flexDirection: 'row',
    marginVertical: 20,
    justifyContent: 'space-between',
  },
  highLightIcon: {
    backgroundColor: '#F4F4F4',
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 8,
    marginRight: 5,
    alignItems: 'center',
  },
  highLightTxt: {
    fontSize: 12,
    color: '#999',
  },
  highLightTxtVal: {
    fontSize: 14,
    fontWeight: '600',
  },
  listingDetails: {
    fontSize: 16,
    color: color.black,
    lineHeight: 25,
    letterSpacing: 0.5,
  },
  footer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    padding: 20,
    paddingBottom: 30,
    width: width,
  },
  footerBtn: {
    flex: 1,
    backgroundColor: color.black,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  footerBtnTxt: {
    color: color.white,
    fontSize: 16,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  footerBookBtn: {
    flex: 2,
    backgroundColor: color.primaryColor,
    marginRight: 20,
  }
})