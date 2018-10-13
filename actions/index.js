export const UPDATE_DECKS = 'UPDATE_DECKS'
export const DELETE_DECK = 'DELETE_DECK'

export const updateDecks = decks => {
  return {
    type: UPDATE_DECKS,
    decks,
  }
}

export const deleteDecks = id => {
  return {
    type: DELETE_DECKS,
    id,
  }
}
