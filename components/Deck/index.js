import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, ScrollView, View, StyleSheet } from 'react-native'
import Card from './Card'
import { spaces } from '../../theme'

class Deck extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.title,
      headerRight: (
        <Text
          style={styles.editButton}
          onPress={() =>
            navigation.navigate('NewDeck', navigation.state.params)
          }
        >
          edit
        </Text>
      ),
    }
  }

  render() {
    const { cards } = this.props.navigation.state.params
    const cardsAsArray = Object.keys(cards).map(key => cards[key])

    return (
      <ScrollView style={styles.root}>
        <View style={styles.cards}>
          {cardsAsArray.map((card, key) => (
            <Card key={key} question={card.question} answer={card.answer} />
          ))}
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  root: { padding: spaces.x1 },

  editButton: { padding: 10 },

  cards: { marginBottom: spaces.x2 },
})

Deck.propTypes = { navigation: PropTypes.object }

export default Deck
