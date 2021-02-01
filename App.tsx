import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './src/pages/Home/Home';
import Inputs from './src/pages/Inputs/Inputs';
import States from './src/pages/States/States';
import ListsScrollView from './src/pages/ListsScrollView/ListsScrollView';
import FlatList from './src/pages/FlatList/FlatList';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="States" component={States} />
        <Stack.Screen name="Inputs" component={Inputs} />
        <Stack.Screen name="ListsScrollView" component={ListsScrollView} />
        <Stack.Screen name="FlatList" component={FlatList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
