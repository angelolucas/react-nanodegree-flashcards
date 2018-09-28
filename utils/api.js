import { AsyncStorage } from 'react-native'

export const newDeck = deck =>
  AsyncStorage.setItem(
    'decks',
    JSON.stringify({
      [deck.id]: deck,
    })
  )
