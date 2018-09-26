import React from 'react'
import { createStackNavigator } from 'react-navigation'
import { View, Text } from 'react-native'
import Home from './src/components/Home'
import Deck from './src/components/Deck'
import NewDeck from './src/components/NewDeck'
import NewCard from './src/components/NewDeck/NewCard'

const Stack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => ({
      header: null,
    }),
  },
  Deck: {
    screen: Deck,
    navigationOptions: ({ navigation }) => {
      const title = navigation.state.params.title

      return { title }
    },
  },
  NewDeck: {
    screen: NewDeck,

    navigationOptions: () => ({ title: 'New Deck' }),
  },
  Card: {
    screen: NewCard,
    navigationOptions: () => ({ title: 'New Card' }),
  },
})

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Stack />
      </View>
    )
  }
}
