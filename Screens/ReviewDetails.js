import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function ReviewDetails() {
  return (
    <View styles={styles.container}>
      <Text>ReviewDetails</Text>
    </View>
  )
}

const styles=StyleSheet.create(
    {
        container:
        {
            padding:25,
        }


    }
)