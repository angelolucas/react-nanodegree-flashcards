import { createStore } from 'redux'
import reducer from './reducer'
import { AsyncStorage } from 'react-native'

const store = createStore(reducer)

store.subscribe = () => {
  AsyncStorage.setItem('store', JSON.stringify(store.getState()))
}

export default store
