import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './src/screens/HomePage';
import ExercicioScreen from './src/screens/Exercicio';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // screenOptions={
        //   {headerShown: false}
        // }
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Exercicio" component={ExercicioScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};