import { createStackNavigator } from 'react-navigation'
import Home from './components/Home'
import Deck from './components/Deck'
import NewDeck from './components/NewDeck'
import NewCard from './components/NewCard'

export default createStackNavigator({
  Home: { screen: Home },
  Deck: { screen: Deck },
  NewDeck: { screen: NewDeck },
  Card: { screen: NewCard },
})
