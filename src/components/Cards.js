import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import CardFlip from 'react-native-card-flip'

class Cards extends Component {
  state = { correctAnswer: false }

  render() {
    const { correctAnswer } = this.state

    return (
      <View style={styles.root}>
        <CardFlip style={styles.cardContainer} ref={card => (this.card = card)}>
          <View style={styles.card}>
            <View style={styles.questionContainer}>
              <Text style={styles.question}>
                Dos React Native work with Android?
              </Text>
            </View>
            <View style={styles.navButtons}>
              <Text
                style={styles.button}
                onPress={() => {
                  this.setState({ correctAnswer: true })
                  this.card.flip('incorrect')
                }}
              >
                Incorrect
              </Text>
              <Text
                style={styles.button}
                onPress={() => {
                  this.setState({ correctAnswer: false })
                  this.card.flip('correct')
                }}
              >
                Correct
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.card,
              correctAnswer ? styles.correct : styles.incorrect,
            ]}
          >
            <View style={styles.resultContainer}>
              {correctAnswer ? (
                <Text style={styles.result}>Correct!</Text>
              ) : (
                <Text style={styles.result}>Incorrect!</Text>
              )}
            </View>
            <View style={styles.navButtons}>
              <Text style={styles.button} onPress={() => this.card.flip()}>
                Next
              </Text>
            </View>
          </View>
        </CardFlip>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 10,
    marginBottom: 30,
  },

  cardContainer: { height: '100%' },

  card: {
    borderRadius: 5,
    backgroundColor: 'white',
    height: '100%',
  },

  questionContainer: {
    flex: 1,
    justifyContent: 'center',
  },

  question: {
    fontSize: 38,
    textAlign: 'center',
  },

  navButtons: { flexDirection: 'row' },

  button: {
    borderColor: 'black',
    borderWidth: 1,
    flex: 1,
    margin: 10,
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

  correct: { backgroundColor: '#87D86B' },

  incorrect: { backgroundColor: '#DB3D35' },
})

export default Cards
