import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, Text } from 'react-native'
import FlipCard from './FlipCard'

class Card extends Component {
  state = { correctAnswer: false }

  handleAnswer = choice => {
    const correctAnswer = this.props.answer === choice ? true : false

    this.setState({ correctAnswer })
    this.card.flip()
  }

  render() {
    const { correctAnswer } = this.state
    const { question } = this.props

    return (
      <FlipCard style={styles.root} ref={card => (this.card = card)}>
        <View style={styles.front}>
          <Text style={styles.question}>{question}</Text>

          <View style={styles.navButtons}>
            <Text
              style={styles.button}
              onPress={() => this.handleAnswer(false)}
            >
              False
            </Text>
            <Text style={styles.button} onPress={() => this.handleAnswer(true)}>
              True
            </Text>
          </View>
        </View>
        <View style={[styles.back, correctAnswer ? styles.hit : styles.miss]}>
          <Text style={styles.question}>{question}</Text>
          {correctAnswer ? (
            <Text style={styles.result}>Correct!</Text>
          ) : (
            <Text style={styles.result}>Incorrect!</Text>
          )}
        </View>
      </FlipCard>
    )
  }
}

const styles = StyleSheet.create({
  root: { margin: 20 },

  front: {
    backgroundColor: 'white',
    padding: 20,
  },

  back: {
    borderRadius: 5,
    padding: 20,
    position: 'absolute',
  },

  question: {
    fontSize: 28,
    marginBottom: 20,
  },

  navButtons: { flexDirection: 'row' },

  button: {
    borderColor: 'black',
    borderWidth: 1,
    flex: 1,
    textAlign: 'center',
    fontSize: 28,
  },

  resultContainer: {
    flex: 1,
    justifyContent: 'center',
  },

  result: {
    fontSize: 38,
    textAlign: 'center',
  },

  hit: { backgroundColor: '#87D86B' },

  miss: { backgroundColor: '#DB3D35' },
})

Card.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.bool,
}

export default Card
