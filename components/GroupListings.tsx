import { FlatList, Image, ListRenderItem, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GroupType } from '@/types/groupType'
import color from '@/constants/color';
import { Ionicons } from '@expo/vector-icons';

const GroupListings = ({listings}: {listings: GroupType[]}) => {
    const renderItem:ListRenderItem<GroupType> = ({item}) => {
        return(
            <View style={styles.item}>
                <Image source={{uri: item.image}} style={styles.image}/>
                <View>
                    <Text style={styles.itemTxt}>{item.name}</Text>
                    <View style={{flexDirection: 'row', alignItems:'center'}}>
                        <Ionicons name='star' size={20} color={color.primaryColor}/>
                        <Text style={styles.itemRating}>{item.ratings}</Text>
                        <Text style={styles.itemReview}>{item.reviews}</Text>
                    </View>
                </View>
            </View>
        );
    };
  return (
    <View style={{marginVertical: 20}}>
      <Text style={styles.title}>Top Travel Groups</Text>
      <FlatList 
      data={listings} 
      renderItem={renderItem} 
      horizontal 
      showsHorizontalScrollIndicator={false}/>
    </View>
  )
}

export default GroupListings

const styles = StyleSheet.create({
    image: {
        width: 80,
        height: 100,
        borderRadius: 10,
        marginRight: 10,
    },
    item: {
        backgroundColor: color.white,
        padding: 10,
        borderRadius: 10,
        marginRight: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: '600',
        color: color.black,
        marginBottom: 10,
    },
    itemTxt: {
        fontSize: 14,
        fontWeight: '600',
        color: color.black,
        marginBottom: 8,
    },
    itemRating: {
        fontSize: 14,
        fontWeight: '600',
        color: color.black,
        marginLeft: 5,
    },
    itemReview: {
        fontSize: 14,
        color: '#999'
    }
})
