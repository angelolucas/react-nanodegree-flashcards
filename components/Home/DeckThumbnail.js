import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import { spaces, colors } from '../../theme'

class DeckThumbnail extends Component {
  render() {
    const { title, length } = this.props

    return (
      <View style={styles.root}>
        <TouchableWithoutFeedback
          onPress={() => this.props.navigate('Deck', { title })}
        >
          <View style={styles.card}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.length}>{length}</Text>
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
  title: PropTypes.string,
  length: PropTypes.string,
  navigate: PropTypes.func,
}

export default DeckThumbnail
