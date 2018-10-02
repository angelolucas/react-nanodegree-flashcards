import React from 'react'
import { createStackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import { View } from 'react-native'
import store from './store'
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
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Stack />
        </View>
      </Provider>
    )
  }
}
