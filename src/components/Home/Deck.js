import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableWithoutFeedback } from 'react-native'

class Deck extends Component {
  render() {
    const { title, length } = this.props

    return (
      <View>
        <TouchableWithoutFeedback
          onPress={() => this.props.navigate('Cards', { title })}
        >
          <View>
            <Text>{title}</Text>
            <Text>{length}</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

Deck.propTypes = {
  title: PropTypes.string,
  length: PropTypes.string,
  navigate: PropTypes.func,
}

export default Deck
