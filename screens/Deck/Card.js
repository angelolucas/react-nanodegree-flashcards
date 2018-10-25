import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, Text } from 'react-native'
import { spaces, colors } from '../../theme'
import { Button, FlipCard } from '../../components'

class Card extends Component {
  state = { userAnswer: false }

  handleAnswer = answer => {
    const { correctAnswer, onCardAnswer } = this.props
    const userAnswer = correctAnswer === answer ? true : false

    this.setState({ userAnswer })
    this.card.flip()
    onCardAnswer(userAnswer)
  }

  render() {
    const { userAnswer } = this.state
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
        <View style={[styles.back, userAnswer ? styles.hit : styles.miss]}>
          <Text style={styles.question}>{question}</Text>
          {userAnswer ? (
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
