import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ScrollView, Text } from 'react-native'
import DeckThumbnail from './DeckThumbnail'

class Home extends Component {
  render() {
    const { navigate } = this.props.navigation

    return (
      <ScrollView>
        <Text onPress={() => navigate('NewDeck')}>New Deck</Text>

        <DeckThumbnail title="English" length="10" navigate={navigate} />
        <DeckThumbnail title="React" length="15" navigate={navigate} />
        <DeckThumbnail title="ES6" length="0" navigate={navigate} />
        <DeckThumbnail title="Spanish" length="3" navigate={navigate} />
        <DeckThumbnail title="React" length="8" navigate={navigate} />
        <DeckThumbnail title="Countries" length="30" navigate={navigate} />
        <DeckThumbnail title="UStates" length="90" navigate={navigate} />
        <DeckThumbnail title="Ukulele" length="55" navigate={navigate} />
        <DeckThumbnail title="English" length="13" navigate={navigate} />
        <DeckThumbnail title="React" length="43" navigate={navigate} />
        <DeckThumbnail title="Ukulele" length="20" navigate={navigate} />
      </ScrollView>
    )
  }
}

Home.propTypes = { navigation: PropTypes.object }

export default Home
