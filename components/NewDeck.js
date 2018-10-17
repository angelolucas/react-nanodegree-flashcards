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
    id: uuid(),
    title: '',
    cards: {},
  }

  static navigationOptions = { title: 'New Deck' }

  updateCards = data => {
    const { id, question, answer } = data
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
    const { dispatch, navigation } = this.props
    const { id, title, cards } = this.state
    const deck = {
      [id]: {
        id,
        title,
        cards,
      },
    }

    dispatch(updateDecks(deck))
    navigation.navigate('Home')
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
                onPress={() =>
                  navigate('EditCard', {
                    card,
                    updateCards: this.updateCards,
                    deleteCard: this.deleteCard,
                  })
                }
              >
                <View style={styles.card}>
                  <Text>{card.question}</Text>
                  <Text>{card.answer}</Text>
                </View>
              </TouchableWithoutFeedback>
            ))}
          </View>
        )}

        <Button
          onPress={() => navigate('NewCard', { updateCards: this.updateCards })}
          buttonStyle="light"
        >
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
