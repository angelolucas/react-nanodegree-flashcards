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
import { TextInput, Label, Button } from '../customComponents'
import { createDeck } from '../../actions'
//import * as api from '../../utils/api'

class NewDeck extends Component {
  state = {
    title: '',
    cards: [],
  }

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

    this.props.dispatch(createDeck(deck))

    //api.newDeck(deck)
  }

  render() {
    const { title, cards } = this.state
    const { navigate } = this.props.navigation

    return (
      <ScrollView>
        <Label>Title</Label>
        <TextInput
          onChangeText={title => this.setState({ title })}
          value={title}
          autoFocus
          multiline
        />

        {cards.length && (
          <View>
            <Label>Questions</Label>
            {cards.map(card => (
              <TouchableWithoutFeedback
                key={card.id}
                onPress={() => navigate('Card', card)}
              >
                <View style={styles.card}>
                  <Text>{card.question}</Text>
                  <Text>{card.answer}</Text>
                </View>
              </TouchableWithoutFeedback>
            ))}
          </View>
        )}

        <Button onPress={() => navigate('Card')} light>
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
