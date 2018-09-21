import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'

class NewCard extends Component {
  render() {
    return (
      <View>
        <TextInput multiline={true} />
        <Text>True</Text>
        <Text>False</Text>
      </View>
    )
  }
}

export default NewCard
