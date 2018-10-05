import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ScrollView, View, StyleSheet } from 'react-native'
import Card from './Card'
import { spaces } from '../../theme'

class Deck extends Component {
  render() {
    const { cards } = this.props.navigation.state.params

    return (
      <ScrollView style={styles.root}>
        <View style={styles.cards}>
          {cards.map((card, key) => (
            <Card key={key} question={card.question} answer={card.answer} />
          ))}
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  root: { padding: spaces.x1 },

  cards: { marginBottom: spaces.x2 },
})

Deck.propTypes = { navigation: PropTypes.string }

export default Deck
