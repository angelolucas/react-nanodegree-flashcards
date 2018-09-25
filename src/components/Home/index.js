import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ScrollView, Text } from 'react-native'
import Deck from './Deck'

class Home extends Component {
  render() {
    const { navigate } = this.props.navigation

    return (
      <ScrollView>
        <Text onPress={() => navigate('NewDeck')}>New Deck</Text>

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
      </ScrollView>
    )
  }
}

Home.propTypes = { navigation: PropTypes.object }

export default Home
