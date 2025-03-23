import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home';
import ReviewDetails from '../Screens/ReviewDetails';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
   
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#eee' } }}>
        <Stack.Screen name="Home" component={Home} options={{ title: 'GameZone' }} />
        <Stack.Screen name="ReviewDetails" component={ReviewDetails} options={{ title: 'Review Details' }} />
      </Stack.Navigator>

  );
}
