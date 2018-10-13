import { createStackNavigator } from 'react-navigation'
import Home from './components/Home'
import Deck from './components/Deck'
import NewDeck from './components/NewDeck'
import EditDeck from './components/EditDeck'
import NewCard from './components/NewCard'
import EditCard from './components/EditCard'

export default createStackNavigator({
  Home: { screen: Home },
  Deck: { screen: Deck },
  NewDeck: { screen: NewDeck },
  EditDeck: { screen: EditDeck },
  NewCard: { screen: NewCard },
  EditCard: { screen: EditCard },
})
