import { CREATE_DECK, RECEIVE_DECKS } from '../actions'

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_DECK:
      return {
        ...state,
        ...action.deck,
      }

    case RECEIVE_DECKS:
      console.log('RECEIVE_DECKS', action.decks)
      return {
        ...state,
        ...action.decks,
      }

    default:
      return state
  }
}
