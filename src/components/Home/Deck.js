import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Card = styled.View`
  flex: 1 1 150px;
  background-color: white;
  padding: 5px;
  min-height: 150px;
  margin: 5px;
  border-radius: 5px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  justify-content: center;
`
const Title = styled.Text`
  text-align: center;
  font-size: 30px;
  margin-bottom: 5px;
`
const Length = styled.Text`
  text-align: center;
  font-size: 16px;
`

class Deck extends Component {
  render() {
    return (
      <Card>
        <Title>{this.props.title}</Title>
        <Length>{this.props.length}</Length>
      </Card>
    )
  }
}

Deck.propTypes = {
  title: PropTypes.string,
  length: PropTypes.string,
}

export default Deck
