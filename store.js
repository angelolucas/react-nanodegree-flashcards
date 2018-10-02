import { createStore } from 'redux'
import { AsyncStorage } from 'react-native'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './reducer'

const store = createStore(reducer, composeWithDevTools())

store.subscribe(() => {
  AsyncStorage.setItem('store', JSON.stringify(store.getState()))
})

export default store
