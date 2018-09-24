import React, { Component } from 'react'
import { ScrollView, Text } from 'react-native'
import styled from 'styled-components'
import { FormLabel, FormInput, Button } from 'react-native-elements'
import NewCard from './NewCard'

class NewDeck extends Component {
  state = { cards: [] }

  addCard = () => {
    const { cards } = this.state
    const id = cards.slice(-1)[0].id + 1

    this.setState({ cards: [...cards, { id }] })
  }

  componentWillReceiveProps = Next => {
    console.log()
  }
  handleAdd = values => {
    console.log(values)
  }

  deleteCard = id => {
    const cards = this.state.cards.filter(card => card.id !== id)

    this.setState({ cards })
  }

  render() {
    return (
      <ScrollView>
        <Group>
          <FormLabel>Title</FormLabel>
          <FormInput />
        </Group>

        <Group>
          {this.state.cards.map(card => (
            <NewCard
              id={card.id}
              key={card.id}
              handleDelete={this.deleteCard}
              handleAdd={this.handleAddCard}
            />
          ))}
          <Button
            title="Add Card"
            onPress={() => this.props.navigation.navigate('Card')}
          />
        </Group>

        <Button title="Create" raised />
      </ScrollView>
    )
  }
}

const Group = styled.View`
  margin-bottom: 30px;
`

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

export default NewDeck
