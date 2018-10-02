import { CREATE_DECK } from '../actions'

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_DECK:
      return {
        ...state,
        ...action.deck,
      }
    default:
      return state
  }
}
