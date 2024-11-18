import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home/Home';
import Details from '../screens/Details/Details';

export type RootStackParams = {
  Home: undefined;
  Details: {movieId: number};
};

const Stack = createStackNavigator<RootStackParams>();

export function Navigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}
