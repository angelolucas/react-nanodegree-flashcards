import React, { Component } from 'react'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Text } from 'react-native'
import Swipeout from 'react-native-swipeout'

const Root = styled.View`
  flex: 1 1 150px;
  margin-bottom: 5px;
`
const Card = styled.View`
  background-color: white;
  padding: 15px;
  margin: 5px 10px 5px;
  border-radius: 5px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  justify-content: center;
  z-index: 1;
`
const Title = styled.Text`
  font-size: 30px;
  margin-bottom: 5px;
`
const Length = styled.Text`
  font-size: 16px;
`

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
    return (
      <Root>
        <Swipeout right={this.swipeoutBtns} backgroundColor="transparent">
          <Card>
            <Title>{this.props.title}</Title>
            <Length>{this.props.length}</Length>
          </Card>
        </Swipeout>
      </Root>
    )
  }
}

Deck.propTypes = {
  title: PropTypes.string,
  length: PropTypes.string,
}

export default Deck
