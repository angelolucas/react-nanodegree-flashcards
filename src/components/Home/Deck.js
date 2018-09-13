import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Root = styled.View`
  flex: 1 1 150px;
  margin: 5px;
`
const Card = styled.View`
  background-color: white;
  padding: 5px;
  min-height: 150px;
  border-radius: 5px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  justify-content: center;
  z-index: 1;
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
const Ballon = styled.View`
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
`
const Button = styled.Text`
  border: 1px solid #ccc;
  padding: 10px;
`

class Deck extends Component {
  render() {
    return (
      <Root>
        <Card>
          <Title>{this.props.title}</Title>
          <Length>{this.props.length}</Length>
        </Card>
        <Ballon>
          <Button>Add</Button>
          <Button>Start</Button>
        </Ballon>
      </Root>
    )
  }
}

Deck.propTypes = {
  title: PropTypes.string,
  length: PropTypes.string,
}

export default Deck
