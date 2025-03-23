import { View, Text, Button } from 'react-native';
import React from 'react';
import { globalStyles } from '../styles/Global';
import Card from '../Shared/Card';


export default function ReviewDetails({ route, navigation }) {
  // ✅ Use route.params instead of navigation.getParam()
  const { title, body, rating } = route.params;

  return (
    <View style={globalStyles.container}>
      <Card>
      <Text>{title}</Text>
      <Text>{body}</Text>
      <Text>{rating}</Text>
      </Card>
     
    </View>
  );
}
