import React, { Component } from 'react'
import { View } from 'react-native'
import styled from 'styled-components'

const Title = styled.Text`
  margin: 20px 10px 10px;
  font-size: 18px;
`
const Input = styled.TextInput`
  background-color: white;
  width: 100%;
  padding: 10px;
  font-size: 16px;
`

class NewDeck extends Component {
  render() {
    return (
      <View>
        <Title>Deck Title</Title>
        <Input />
      </View>
    )
  }
}

export default NewDeck
