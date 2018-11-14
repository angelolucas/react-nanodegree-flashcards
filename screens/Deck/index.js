import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, ScrollView, View, StyleSheet } from 'react-native'
import { spaces } from '../../theme'
import ProgressBar from './ProgressBar'
import Card from './Card'
import Scoreboard from './Scoreboard'

class Deck extends Component {
  state = {
    cards: {},
    progress: 0,
    hits: 0,
    miss: 0,
    finished: false,
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
    this.applyCardAnswer(card, userAnswer)
    this.updateProgress(card, userAnswer)
  }

  applyCardAnswer = (card, userAnswer) => {
    this.setState({
      cards: {
        ...this.state.cards,
        [card.id]: {
          ...card,
          userAnswer,
        },
      },
    })
  }

  updateProgress = (card, userAnswer) => {
    const correctAnswer = userAnswer === card.answer
    const steps = Object.keys(this.state.cards).length
    let progress = this.state.progress + 1

    if (correctAnswer) {
      const hits = this.state.hits + 1

      this.setState({ progress, hits })
    } else {
      const miss = this.state.miss + 1

      this.setState({ progress, miss })
    }

    if (steps === progress) {
      this.handleFinalization()
    }
  }

  handleFinalization = () => {
    this.setState({ finished: true })
  }

  handleReset = () => {
    const { cards } = this.props.navigation.state.params

    this.setState({
      cards,
      progress: 0,
      hits: 0,
      miss: 0,
      finished: false,
    })
  }

  render() {
    const { cards, hits, miss, progress, finished } = this.state
    const cardsAsArray = Object.keys(cards).map(key => cards[key])
    const steps = Object.keys(cards).length

    return (
      <React.Fragment>
        <ProgressBar progress={progress} steps={steps} />
        {finished ? (
          <Scoreboard
            hits={hits}
            miss={miss}
            onPressReset={this.handleReset}
            navigation={this.props.navigation}
          />
        ) : (
          <ScrollView style={styles.root}>
            <View style={styles.cards}>
              {cardsAsArray.map((card, key) => (
                <Card key={key} card={card} onChange={this.handleCardAnswer} />
              ))}
            </View>
          </ScrollView>
        )}
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
