import React from 'react'
import { createStackNavigator } from 'react-navigation'
import { View } from 'react-native'
import Home from './src/components/Home'
import NewDeck from './src/components/NewDeck'
import Cards from './src/components/Cards'

const Stack = createStackNavigator({
  Home: { screen: Home },
  NewDeck: {
    screen: NewDeck,

    navigationOptions: () => ({ title: 'New Deck' }),
  },
  Cards: { screen: Cards },
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
