import React, { Component } from 'react'
import Card from './Card'
import { ScrollView } from 'react-native'

class Cards extends Component {
  render() {
    return (
      <ScrollView>
        <Card question="Dos React Native work with Android?" answer={true} />
        <Card
          question="Lhasa Apsos were used by monks for protection"
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
      </ScrollView>
    )
  }
}

export default Cards
