import { CREATE_DECK } from '../action'

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
