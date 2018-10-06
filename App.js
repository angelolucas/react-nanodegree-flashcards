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
  Home: { screen: Home },
  Deck: { screen: Deck },
  NewDeck: { screen: NewDeck },
  Card: { screen: NewCard },
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
