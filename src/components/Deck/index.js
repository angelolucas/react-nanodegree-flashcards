import React, { Component } from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'
import Card from './Card'
import { spaces } from '../../theme'

class Deck extends Component {
  render() {
    return (
      <ScrollView style={styles.root}>
        <View style={styles.cards}>
          <Card
            question="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's."
            answer={true}
          />
          <Card
            question="Lhasa Apsos were used by monks for protection."
            answer={true}
          />
          <Card
            question="The raccoon dog is not a dog. It belongs to the same family as the raccoon (Procyonidae)."
            answer={false}
          />
          <Card
            question="The otocyon can hear insects under the sand."
            answer={true}
          />
          <Card
            question="Thousands of foxes live freely in London."
            answer={true}
          />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  root: { padding: spaces.x1 },

  cards: { marginBottom: spaces.x2 },
})

export default Deck
