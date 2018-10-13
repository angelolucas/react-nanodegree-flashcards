import React, { Component } from 'react'
import { connect } from 'react-redux'
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
import { TextInput, Label, Button } from './customComponents'
import { updateDecks } from '../actions'

class NewDeck extends Component {
  state = {
    title: '',
    cards: {},
  }

  static navigationOptions = { title: 'New Deck' }

  UNSAFE_componentWillReceiveProps = next => {
    const handleCard = next.navigation.getParam('handleCard')

    if (handleCard.action === 'update') {
      this.updateCards(handleCard.id, handleCard.question, handleCard.answer)
    }

    if (handleCard.action === 'delete') {
      this.deleteCard(handleCard.id)
    }
  }

  updateCards = (id, question, answer) => {
    const card = {
      [id]: {
        id,
        question,
        answer,
      },
    }

    this.setState({
      cards: {
        ...this.state.cards,
        ...card,
      },
    })
  }

  deleteCard = id => {
    const cards = this.state.cards

    delete cards[id]

    this.setState({ cards })
  }

  handleSubmit = () => {
    const { title, cards } = this.state
    const id = uuid()
    const deck = {
      [id]: {
        id,
        title,
        cards,
      },
    }

    this.props.dispatch(updateDecks(deck))
    this.props.navigation.navigate('Home')
  }

  render() {
    const { title, cards } = this.state
    const { navigate } = this.props.navigation
    const cardsAsArray = Object.keys(cards).map(key => cards[key])

    return (
      <ScrollView>
        <Label>Title</Label>
        <TextInput
          onChangeText={title => this.setState({ title })}
          value={title}
          autoFocus
          multiline
        />

        {cardsAsArray.length && (
          <View>
            <Label>Questions</Label>
            {cardsAsArray.map(card => (
              <TouchableWithoutFeedback
                key={card.id}
                onPress={() => navigate('EditCard', card)}
              >
                <View style={styles.card}>
                  <Text>{card.question}</Text>
                  <Text>{card.answer}</Text>
                </View>
              </TouchableWithoutFeedback>
            ))}
          </View>
        )}

        <Button onPress={() => navigate('NewCard')} buttonStyle="light">
          <FontAwesome name="plus" size={13} /> Add Card
        </Button>

        <Button disabled={!title} onPress={this.handleSubmit}>
          Create
        </Button>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
})

NewDeck.propTypes = {
  navigation: PropTypes.object,
  dispatch: PropTypes.func,
}

export default connect()(NewDeck)
