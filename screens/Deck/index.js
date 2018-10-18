import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, ScrollView, View, StyleSheet } from 'react-native'
import { spaces } from '../../theme'
import ProgressBar from './ProgressBar'
import Card from './Card'

class Deck extends Component {
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

  state = {
    progress: 0,
    hits: 0,
    miss: 0,
  }

  updateProgress = correctAnswer => {
    let progress = this.state.progress + 1

    if (correctAnswer) {
      const hits = this.state.hits + 1
      this.setState({ progress, hits })
    } else {
      const miss = this.state.miss + 1
      this.setState({ progress, miss })
    }
  }

  render() {
    const { cards } = this.props.navigation.state.params
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
              <Card
                key={key}
                question={card.question}
                answer={card.answer}
                updateProgress={this.updateProgress}
              />
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
