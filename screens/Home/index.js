import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { AsyncStorage, StyleSheet, ScrollView, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Constants } from 'expo'
import { spaces, colors } from '../../theme'
import { updateDecks } from '../../actions'
import DeckThumbnail from './DeckThumbnail'

class Home extends Component {
  static navigationOptions = { header: null }

  UNSAFE_componentWillMount = () => {
    AsyncStorage.getItem('store').then(data => {
      this.props.dispatch(updateDecks(JSON.parse(data)))
    })
  }

  render() {
    const { navigation, decks } = this.props
    const decksAsArray = Object.keys(decks).map(key => decks[key])

    return (
      <ScrollView style={styles.root}>
        <Text
          style={styles.newDeckButton}
          onPress={() => navigation.navigate('NewDeck')}
        >
          New Deck <Ionicons name="ios-arrow-forward" size={20} />
        </Text>

        <View style={styles.listDeckThumbnail}>
          {decksAsArray.map(deck => (
            <DeckThumbnail
              key={deck.id}
              navigate={navigation.navigate}
              {...deck}
            />
          ))}
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

Home.propTypes = {
  navigation: PropTypes.object,
  decks: PropTypes.object,
  dispatch: PropTypes.func,
}

const mapStateToProps = state => ({ decks: state })

export default connect(mapStateToProps)(Home)
