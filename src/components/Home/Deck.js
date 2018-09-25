import React, { Component } from 'react'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import PropTypes from 'prop-types'
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import Swipeout from 'react-native-swipeout'

class Deck extends Component {
  // Buttons
  swipeoutBtns = [
    {
      text: (
        <Text style={{ color: '#CF3D2A' }}>
          <MaterialIcons name="add-circle" size={50} />
        </Text>
      ),
      backgroundColor: 'transparent',
    },
    {
      text: (
        <Text style={{ color: '#3596B5' }}>
          <MaterialCommunityIcons name="delete-circle" size={50} />
        </Text>
      ),
      backgroundColor: 'transparent',
      color: '#cccccc',
    },
  ]
  render() {
    const { title, length } = this.props

    return (
      <View>
        <Swipeout right={this.swipeoutBtns} backgroundColor="transparent">
          <TouchableWithoutFeedback
            onPress={() => this.props.navigate('Cards', { title })}
          >
            <View>
              <Text>{title}</Text>
              <Text>{length}</Text>
            </View>
          </TouchableWithoutFeedback>
        </Swipeout>
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
