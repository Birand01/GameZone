import { View, Text,Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { globalStyles } from '../styles/Global'
import { FlatList } from 'react-native-gesture-handler';

export default function Home({navigation}) {
  const[reviews,setReviews]=useState(
    [
      {title:"Zelda, Breath of Fresh Air",rating:5,body:"lorem ipsum",key:1},
      {title:"Gotta Catch Them all",rating:4,body:"lorem ipsum",key:2},
      {title:"Final Fantasy",rating:5,body:"lorem ipsum",key:3},

    ]
  );
 
  
  return (
    <View style={globalStyles.container}>
     <FlatList
     data={reviews}
     renderItem={({item})=>(
      <TouchableOpacity onPress={()=>navigation.navigate("ReviewDetails",item)}>
        <Text style={globalStyles.titleText} >{item.title}</Text>
      </TouchableOpacity>
     )}
     />
    </View>
  )
}

