import React, { Component } from 'react'
import { ScrollView, Text } from 'react-native'
import styled from 'styled-components'
import NewCard from './NewCard'

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
  state = { cards: [{ id: 1 }] }

  moreOneCard = () => {
    const { cards } = this.state
    const id = cards.slice(-1)[0].id + 1

    this.setState({ cards: [...cards, { id }] })
  }

  render() {
    return (
      <ScrollView>
        <Title>Title</Title>
        <Input />
        <Title>Cards</Title>

        {this.state.cards.map(card => (
          <NewCard key={card.id} />
        ))}

        <Text
          style={{
            backgroundColor: '#ccc',
            padding: 30,
          }}
          onPress={this.moreOneCard}
        >
          More Card
        </Text>
        <Text>Create</Text>
      </ScrollView>
    )
  }
}

export default NewDeck
