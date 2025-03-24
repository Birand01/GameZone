import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { globalStyles,images } from '../styles/Global';
import Card from '../Shared/Card';


export default function ReviewDetails({ route, navigation }) {
  // ✅ Use route.params instead of navigation.getParam()
  const { title, body, rating } = route.params;
  return (
    <View style={globalStyles.container}>
      <Card>
      <Text>{title}</Text>
      <Text>{body}</Text>
      <View style={styles.rating}>
        <Text>Game Zone Rating: </Text>
        <Image source={images.ratings[rating]} />
      </View>
      </Card>
     
    </View>
  );
}
const styles=StyleSheet.create(
  {
    rating:
    {
      flexDirection:"row",
      justifyContent:"center",
      paddingTop:16,
      marginTop:16,
      borderTopWidth:1,
      borderTopColor:"#eee",
    }
  }
)