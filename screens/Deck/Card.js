import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, Text } from 'react-native'
import { spaces, colors } from '../../theme'
import { Button } from '../../components'
import FlipCard from './FlipCard'

class Card extends Component {
  state = { correctAnswer: false }

  handleAnswer = choice => {
    const correctAnswer = this.props.answer === choice ? true : false

    this.setState({ correctAnswer })
    this.card.flip()
    this.props.updateProgress(correctAnswer)
  }

  render() {
    const { correctAnswer } = this.state
    const { question } = this.props

    return (
      <FlipCard style={styles.root} ref={card => (this.card = card)}>
        <View style={styles.front}>
          <Text style={styles.question}>{question}</Text>

          <View style={styles.navButtons}>
            <Button
              style={styles.button}
              onPress={() => this.handleAnswer('false')}
            >
              False
            </Button>
            <Button
              style={styles.button}
              onPress={() => this.handleAnswer('true')}
            >
              True
            </Button>
          </View>
        </View>
        <View style={[styles.back, correctAnswer ? styles.hit : styles.miss]}>
          <Text style={styles.question}>{question}</Text>
          {correctAnswer ? (
            <Button buttonStyle="light">Correct!</Button>
          ) : (
            <Button buttonStyle="light">Incorrect!</Button>
          )}
        </View>
      </FlipCard>
    )
  }
}

const styles = StyleSheet.create({
  root: { marginBottom: spaces.x1 },

  front: { backgroundColor: 'white' },

  back: {
    borderRadius: 5,
    position: 'absolute',
    width: '100%',
  },

  question: {
    fontSize: 24,
    margin: spaces.x2,
    marginBottom: spaces.x1,
  },

  navButtons: { flexDirection: 'row' },

  button: { flex: 1 },

  hit: { backgroundColor: colors.success },

  miss: { backgroundColor: colors.danger },
})

Card.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
}

export default Card
