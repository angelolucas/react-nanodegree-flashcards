import React from 'react'
import { StatusBar as Bar, View } from 'react-native'
import { Constants } from 'expo'

export default class StatusBar extends React.Component {
  render() {
    return (
      <View style={{ height: Constants.statusBarHeight }}>
        <Bar />
      </View>
    )
  }
}
