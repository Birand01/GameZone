import { View, Text, Button } from 'react-native';
import React from 'react';
import { globalStyles } from '../styles/Global';

export default function ReviewDetails({ route, navigation }) {
  // ✅ Use route.params instead of navigation.getParam()
  const { title, body, rating } = route.params;

  return (
    <View style={globalStyles.container}>
      <Text>{title}</Text>
      <Text>{body}</Text>
      <Text>{rating}</Text>
    </View>
  );
}
