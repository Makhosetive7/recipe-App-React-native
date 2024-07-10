import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigation from './navigation/BottomTabNavigation';
import RecipeDetails from './screen/RecipeDetails';


export default function App() {
  const Stack = createNativeStackNavigator()


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='bottom_navigation' component={BottomTabNavigation} />
        <Stack.Screen name='recipe_details' component={RecipeDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

