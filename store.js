import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './reducer'
import { AsyncStorage } from 'react-native'

const store = createStore(reducer, composeWithDevTools())

store.subscribe = () => {
  AsyncStorage.setItem('store', JSON.stringify(store.getState()))
}

export default store
