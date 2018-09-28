import React from 'react'
import { createStackNavigator } from 'react-navigation'
import { View } from 'react-native'
import Home from './components/Home'
import Deck from './components/Deck'
import NewDeck from './components/NewDeck'
import NewCard from './components/NewCard'

const Stack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => ({ header: null }),
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
