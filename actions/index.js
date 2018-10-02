export const CREATE_DECK = 'CREATE_DECK'

export const createDeck = deck => {
  return {
    type: CREATE_DECK,
    deck,
  }
}
