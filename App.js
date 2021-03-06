import React from 'react'
import { Provider } from 'react-redux'
import { View } from 'react-native'
import store from './store'
import Routes from './routes'
import { setLocalNotification } from './utils/notifications'

class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Routes />
        </View>
      </Provider>
    )
  }
}

export default App
