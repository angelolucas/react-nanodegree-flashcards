import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Deck from './Deck'

class Home extends Component {
  render() {
    const { navigate } = this.props.navigation

    return (
      <Root>
        <NewDeckButton onPress={() => navigate('NewDeck')}>
          New Deck
        </NewDeckButton>

        <Deck title="English" length="10" navigate={navigate} />
        <Deck title="React" length="15" navigate={navigate} />
        <Deck title="ES6" length="0" navigate={navigate} />
        <Deck title="Spanish" length="3" navigate={navigate} />
        <Deck title="React" length="8" navigate={navigate} />
        <Deck title="Countries" length="30" navigate={navigate} />
        <Deck title="UStates" length="90" />
        <Deck title="Brasilian States" length="4" navigate={navigate} />
        <Deck title="Ukulele" length="55" navigate={navigate} />
        <Deck title="English" length="13" navigate={navigate} />
        <Deck title="React" length="43" navigate={navigate} />
        <Deck title="Ukulele" length="20" navigate={navigate} />
      </Root>
    )
  }
}

const Root = styled.ScrollView`
  margin-bottom: 30px;
`

const NewDeckButton = styled.Text`
  font-size: 20px;
  padding: 10px;
  text-align: right;
  color: #4285f4;
`

Home.propTypes = { navigation: PropTypes.object }

export default Home
