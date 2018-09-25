import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ScrollView, View, Text } from 'react-native'
import styled from 'styled-components'
import { FormLabel, FormInput, Button } from 'react-native-elements'
import uuid from 'uuid'

class NewDeck extends Component {
  state = { cards: [] }

  UNSAFE_componentWillReceiveProps = next => {
    const { question, answer } = next.navigation.state.params

    if (question && answer) {
      this.addCard(question, answer)
    }
  }

  addCard = (question, answer) => {
    const id = uuid()

    this.setState({
      cards: [
        ...this.state.cards,
        {
          id,
          question,
          answer,
        },
      ],
    })
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
          <FormLabel>Questions</FormLabel>
          {this.state.cards.map(card => (
            <ListCards
              key={card.question}
              onPress={() => this.props.navigation.navigate('Card', card)}
            >
              <View>
                <Text>{card.question}</Text>
                <Text>{card.answer}</Text>
              </View>
            </ListCards>
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

const ListCards = styled.TouchableWithoutFeedback`
  border-bottom-color: #ccc;
  padding: 20px;
  font-size: 14px;
  justify-content: space-between;
  flex-direction: row;
`

NewDeck.propTypes = { navigation: PropTypes.func }

export default NewDeck
