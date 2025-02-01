import { StackNavigationProp } from '@react-navigation/stack'

export type RootStackParamList = {
  Accueil: undefined
  Scanner: undefined
  Progrès: undefined
}

export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Accueil'
>
