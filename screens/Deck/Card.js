import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, Text } from 'react-native'
import { spaces, colors } from '../../theme'
import { Button } from '../../components'

class Card extends Component {
  handleAnswer = userAnswer => {
    const { card, onChange } = this.props

    onChange(card, userAnswer)
  }

  render() {
    const { question, userAnswer, answer } = this.props.card
    const correctAnswer = userAnswer === answer

    return (
      <View style={styles.root}>
        {!userAnswer ? (
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
        ) : (
          <View style={[styles.back, correctAnswer ? styles.hit : styles.miss]}>
            <Text style={styles.question}>{question}</Text>
            <Button buttonStyle="light">
              {correctAnswer ? '👍🏽 ' : '👎🏽 '}
              The answer is {answer}!
            </Button>
          </View>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: spaces.x1,
    overflow: 'hidden',
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
