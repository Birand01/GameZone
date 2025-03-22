import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function Home() {
  return (
    <View styles={styles.container}>
      <Text>Home</Text>
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