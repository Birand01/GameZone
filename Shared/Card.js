import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function Card(props) {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        {props.children}
      </View>
    </View>
  )


}

const styles=StyleSheet.create(
    {
        card:{
            borderRadius:10,
            elevation:5,
            backgroundColor:"#fff",
            shadowOffset:{width:1,height:1},
            shadowColor:"#333",
            shadowOpacity:.5,
            shadowRadius:3,
            marginHorizontal:5,
            marginVertical:5,

        },
        cardContent:{
            marginHorizontal:20,
            marginVertical:20
        }

    }
)