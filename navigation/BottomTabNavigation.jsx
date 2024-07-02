import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screen/Home';
import BeefPage from '../screen/BeefPage';
import CocktailPage from '../screen/CocktailPage';
import ChickenPage from '../screen/ChickenPage';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const BottomTabNavigation = () => {
  const Tab = createBottomTabNavigator();

  const screenOptions = {
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
    headerShown: false,
    tabBarStyle: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: 0,
      elevation: 0,
      height: 70,
    },
  };

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name="home" size={24} color={focused ? '#c4b0ff' : 'black'} />
          ),
        }}
      />
      <Tab.Screen
        name="beef"
        component={BeefPage}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name="food-outline" size={24} color={focused ? '#c4b0ff' : 'black'} />
          ),
        }}
      />
      <Tab.Screen
        name="cocktail"
        component={CocktailPage}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name="glass-cocktail" size={24} color={focused ? '#c4b0ff' : 'black'} />
          ),
        }}
      />
      <Tab.Screen
        name="chicken"
        component={ChickenPage}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name="food-drumstick-outline" size={24} color={focused ? '#c4b0ff' : 'black'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
