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
    let progress = this.state.progress + 1

    if (correctAnswer) {
      const hits = this.state.hits + 1

      this.setState({ progress, hits })
    } else {
      const miss = this.state.miss + 1

      this.setState({ progress, miss })
    }
  }

  handleReset = () => {
    const { cards } = this.props.navigation.state.params

    this.setState({
      cards,
      progress: 0,
      hits: 0,
      miss: 0,
    })
  }

  render() {
    const { cards, hits, miss, progress } = this.state
    const cardsAsArray = Object.keys(cards).map(key => cards[key])
    const steps = Object.keys(cards).length
    const notFinished = progress < steps

    return (
      <React.Fragment>
        <ProgressBar progress={progress} steps={steps} />
        {notFinished ? (
          <ScrollView style={styles.root}>
            <View style={styles.cards}>
              {cardsAsArray.map((card, key) => (
                <Card key={key} card={card} onChange={this.handleCardAnswer} />
              ))}
            </View>
          </ScrollView>
        ) : (
          <Scoreboard
            hits={hits}
            miss={miss}
            onPressReset={this.handleReset}
            navigation={this.props.navigation}
          />
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
