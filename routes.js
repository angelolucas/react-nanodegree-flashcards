import { createStackNavigator } from 'react-navigation'
import Home from './screens/Home'
import Deck from './screens/Deck'
import NewDeck from './screens/NewDeck'
import EditDeck from './screens/EditDeck'
import NewCard from './screens/NewCard'
import EditCard from './screens/EditCard'

export default createStackNavigator({
  Home: { screen: Home },
  Deck: { screen: Deck },
  NewDeck: { screen: NewDeck },
  EditDeck: { screen: EditDeck },
  NewCard: { screen: NewCard },
  EditCard: { screen: EditCard },
})
