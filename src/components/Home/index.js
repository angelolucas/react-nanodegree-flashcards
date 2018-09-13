import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import styled from 'styled-components'
import Deck from './Deck'

const ListDeks = styled.View`
  flex-direction: column;
`

class Home extends Component {
  render() {
    return (
      <ScrollView>
        <ListDeks>
          <Deck title="English" length="10" />
          <Deck title="React" length="15" />
          <Deck title="ES6" length="0" />
          <Deck title="Spanish" length="3" />
          <Deck title="React" length="8" />
          <Deck title="Countries" length="30" />
          <Deck title="UStates" length="90" />
          <Deck title="Brasilian States" length="4" />
          <Deck title="Ukulele" length="55" />
          <Deck title="English" length="13" />
          <Deck title="React" length="43" />
          <Deck title="Ukulele" length="20" />
        </ListDeks>
      </ScrollView>
    )
  }
}

export default Home
