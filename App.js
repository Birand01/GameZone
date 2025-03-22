import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Screens/Home';
import Navigator from "./Routes/HomeStack";
export default function App() {
  return (
   <Navigator/>
  );
}

