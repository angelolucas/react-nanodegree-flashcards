import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { ScrollView, View, Text, TouchableWithoutFeedback } from 'react-native'
import uuid from 'uuid'
import { FontAwesome } from '@expo/vector-icons'
import { TextInput, Label, Button, ListItem } from '../components'
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
          <React.Fragment>
            <Label>Questions</Label>
            {cardsAsArray.map(card => (
              <ListItem
                key={card.id}
                title={card.question}
                right={card.answer}
                onPress={() =>
                  navigate('EditCard', {
                    card,
                    updateCards: this.updateCards,
                    deleteCard: this.deleteCard,
                  })
                }
              />
            ))}
          </React.Fragment>
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

NewDeck.propTypes = {
  navigation: PropTypes.object,
  dispatch: PropTypes.func,
}

export default connect()(NewDeck)
