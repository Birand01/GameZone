import { createStackNavigator } from '@react-navigation/stack';
import About from '../Screens/About';

const Stack = createStackNavigator();

export default function AboutStack() {
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#eee', height: 90 } }}>
      <Stack.Screen name="About" component={About} options={{ title: 'About GameZone' }} />
    </Stack.Navigator>
  );
}
