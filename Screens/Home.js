import { View, Text,Button } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/Global'

export default function Home({navigation}) {
  
  const pressHandler=()=>
  {
    navigation.navigate("ReviewDetails"); 
    //navigation.push("ReviewDetails");
  }
  
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home</Text>
      <Button title="Go to Details" onPress={pressHandler} />
    </View>
  )
}

