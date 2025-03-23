import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './Routes/Drawer';  // Ensure correct import

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
