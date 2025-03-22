import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function About() {
  return (
    <Views tyles={styles.container}>
      <Text>About</Text>
    </Views>
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