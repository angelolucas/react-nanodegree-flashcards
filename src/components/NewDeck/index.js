import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableWithoutFeedback,
} from 'react-native'
import uuid from 'uuid'
import { FontAwesome } from '@expo/vector-icons'
import { TextInput, Label, Button } from '../customComponents'

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
        <Label>Title</Label>
        <TextInput autoFocus />

        <Label>Questions</Label>
        {this.state.cards.map(card => (
          <TouchableWithoutFeedback
            key={card.id}
            onPress={() => this.props.navigation.navigate('Card', card)}
          >
            <View style={styles.card}>
              <Text>{card.question}</Text>
              <Text>{card.answer}</Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
        <Button onPress={() => this.props.navigation.navigate('Card')} light>
          <FontAwesome name="plus" size={13} /> Add Card
        </Button>
        <Button>Create</Button>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    fontSize: 14,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
})

NewDeck.propTypes = { navigation: PropTypes.object }

export default NewDeck
