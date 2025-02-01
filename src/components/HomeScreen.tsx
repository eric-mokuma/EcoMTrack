import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { HomeScreenNavigationProp } from '../types/RootStackParamList'

type Props = {
  navigation: HomeScreenNavigationProp
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>EcoTrack</Text>
      <Text style={styles.subtitle}>Votre compagnon vert</Text>
      <Button
        title="Scanner un produit"
        onPress={() => navigation.navigate('Scanner')}
      />
      <Button
        title="Voir mes progrès"
        onPress={() => navigation.navigate('Progrès')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
})

export default HomeScreen
