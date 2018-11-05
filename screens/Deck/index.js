import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, ScrollView, View, StyleSheet } from 'react-native'
import { spaces } from '../../theme'
import ProgressBar from './ProgressBar'
import Card from './Card'

class Deck extends Component {
  state = {
    cards: {},
    progress: 0,
    hits: 0,
    miss: 0,
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.title,
      headerRight: (
        <Text
          style={styles.editButton}
          onPress={() =>
            navigation.navigate('EditDeck', navigation.state.params)
          }
        >
          edit
        </Text>
      ),
    }
  }

  componentWillMount() {
    const { cards } = this.props.navigation.state.params

    this.setState({ cards })
  }

  handleCardAnswer = (card, userAnswer) => {
    console.log(this.state)
    console.log(card, userAnswer)

    this.setState({
      cards: {
        ...this.state.cards,
        [card.id]: {
          ...card,
          userAnswer,
        },
      },
    })

    /*let progress = this.state.progress + 1

    if (userAnswer) {
      const hits = this.state.hits + 1
      this.setState({ progress, hits })
    } else {
      const miss = this.state.miss + 1
      this.setState({ progress, miss })
    }*/
  }

  handleReset = () => {
    const { cards } = this.props.navigation.state.params

    this.setState({ cards })
  }

  render() {
    const { cards } = this.state
    const cardsAsArray = Object.keys(cards).map(key => cards[key])

    return (
      <React.Fragment>
        <ProgressBar
          progress={this.state.progress}
          steps={Object.keys(cards).length}
        />
        <ScrollView style={styles.root}>
          <View style={styles.cards}>
            {cardsAsArray.map((card, key) => (
              <Card key={key} card={card} onChange={this.handleCardAnswer} />
            ))}
          </View>
        </ScrollView>
      </React.Fragment>
    )
  }
}

const styles = StyleSheet.create({
  root: { padding: spaces.x1 },

  editButton: { padding: spaces.x1 },

  cards: { marginBottom: spaces.x2 },
})

Deck.propTypes = { navigation: PropTypes.object }

export default Deck
