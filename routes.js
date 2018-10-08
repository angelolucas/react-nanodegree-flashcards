import { createStackNavigator } from 'react-navigation'
import Home from './components/Home'
import Deck from './components/Deck'
import NewDeck from './components/NewDeck'
import NewCard from './components/NewCard'
import EditCard from './components/EditCard'

export default createStackNavigator({
  Home: { screen: Home },
  Deck: { screen: Deck },
  NewDeck: { screen: NewDeck },
  NewCard: { screen: NewCard },
  EditCard: { screen: EditCard },
})
