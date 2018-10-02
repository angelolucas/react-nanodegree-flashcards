export const CREATE_DECK = 'CREATE_DECK'
export const RECEIVE_DECKS = 'RECEIVE_DECKS'

export const createDeck = deck => {
  return {
    type: CREATE_DECK,
    deck,
  }
}

export const receiveDecks = decks => {
  console.log('receiveDecks', decks)
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}
