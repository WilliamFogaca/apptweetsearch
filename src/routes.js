import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainFeed from './pages/MainFeed';
import UserFeed from './pages/UserFeed';

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="MainFeed" component={MainFeed} />
        <AppStack.Screen name="UserFeed" component={UserFeed} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}