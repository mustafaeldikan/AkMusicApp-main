import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
// import Splash from './normal/Splash';
import Parent from './normal/Parent';
import MusicDashboard from './music/MusicDashboard';
import MusicList from './music/MusicList';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Parent"
          component={Parent}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MusicList"
          component={MusicList}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
