import { UPDATE_DECKS, DELETE_DECK } from '../actions'

export default (state = {}, action) => {
  switch (action.type) {
    case UPDATE_DECKS:
      return {
        ...state,
        ...action.decks,
      }

    case DELETE_DECK:
      // https://medium.com/@tafelito/nice-article-d15fe9f6d1f1
      const { [action.id]: whatever, ...rest } = state

      return rest

    default:
      return state
  }
}
