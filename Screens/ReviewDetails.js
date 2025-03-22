import { View, Text,Button } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/Global'
export default function ReviewDetails({navigation}) {

  const pressHandler=()=>
  {
    navigation.goBack();
  }


  return (
    <View style={globalStyles.container}>
      <Text>ReviewDetails</Text>
      <Button title="Back to Home Screen" onPress={pressHandler}/>
    </View>
  )
}
