export const CREATE_DECK = 'CREATE_DECK'
export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const DELETE_DECK = 'DELETE_DECK'

export const createDeck = deck => {
  return {
    type: CREATE_DECK,
    deck,
  }
}

export const receiveDecks = decks => {
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}

export const deleteDeck = id => {
  return {
    type: DELETE_DECK,
    id,
  }
}
