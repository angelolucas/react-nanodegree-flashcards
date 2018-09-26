import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, ScrollView, Text, View } from 'react-native'
import DeckThumbnail from './DeckThumbnail'
import { Ionicons } from '@expo/vector-icons'
import { Constants } from 'expo'
import { spaces, colors } from '../../theme'

class Home extends Component {
  render() {
    const { navigate } = this.props.navigation

    return (
      <ScrollView style={styles.root}>
        <Text style={styles.newDeckButton} onPress={() => navigate('NewDeck')}>
          New Deck <Ionicons name="ios-arrow-forward" size={20} />
        </Text>

        <View style={styles.listDeckThumbnail}>
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
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  root: { padding: spaces.x1 },

  newDeckButton: {
    textAlign: 'right',
    paddingTop: Constants.statusBarHeight,
    padding: spaces.x1,
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.details,
  },

  listDeckThumbnail: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginBottom: spaces.x2,
  },
})

Home.propTypes = { navigation: PropTypes.object }

export default Home
