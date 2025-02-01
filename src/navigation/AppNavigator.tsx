import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../components/HomeScreen'
import ScannerScreen from '../components/ScannerScreen'
import ProgressScreen from '../components/ProgressScreen'
import Header from '../components/Header'
import { RootStackParamList } from '../types/RootStackParamList'

const Stack = createStackNavigator<RootStackParamList>()

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Accueil">
        <Stack.Screen
          name="Accueil"
          component={HomeScreen}
          options={{ headerTitle: () => <Header /> }}
        />
        <Stack.Screen
          name="Scanner"
          component={ScannerScreen}
          options={{ title: 'Scanner un produit' }}
        />
        <Stack.Screen
          name="Progrès"
          component={ProgressScreen}
          options={{ title: 'Mes progrès' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
