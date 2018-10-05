import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import { spaces, colors } from '../../theme'

class DeckThumbnail extends Component {
  render() {
    const { id, title, cards, navigate } = this.props

    return (
      <View style={styles.root}>
        <TouchableWithoutFeedback
          onPress={() =>
            navigate('Deck', {
              id,
              title,
              cards,
            })
          }
        >
          <View style={styles.card}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.length}>{cards.length}</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 150,
  },

  card: {
    backgroundColor: 'white',
    margin: spaces.x1 / 2,
    marginBottom: 32,
    padding: 10,
    paddingTop: 16,
    height: 150,
    paddingBottom: 16,
    justifyContent: 'center',
    borderRadius: 5,
    shadowOpacity: 0.75,
    shadowRadius: 0,
    shadowColor: '#ccc',
    shadowOffset: {
      height: 5,
      width: 5,
    },
  },

  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
    fontSize: 20,
  },

  length: {
    textAlign: 'center',
    color: colors.gray,
  },
})

DeckThumbnail.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  cards: PropTypes.array,
  navigate: PropTypes.func,
}

export default DeckThumbnail
