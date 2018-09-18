import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import styled from 'styled-components'
import CardFlip from 'react-native-card-flip'

class Cards extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <CardContainer>
          <CardFlip
            style={styles.cardContainer}
            ref={card => (this.card = card)}
          >
            <Card onPress={() => this.card.flip()}>
              <Text height={{ backgroundColor: 'red' }}>AB</Text>
            </Card>
            <Card onPress={() => this.card.flip()}>
              <Text height={{ backgroundColor: 'blue' }}>CD</Text>
            </Card>
          </CardFlip>
        </CardContainer>
        <AnswerContainer>
          <Answer>Incorrect</Answer>
          <Answer>Correct</Answer>
        </AnswerContainer>
      </View>
    )
  }
}

const styles = StyleSheet.create({ cardContainer: { height: '100%' } })

const CardContainer = styled.View`
  flex: auto;
`

const Card = styled.TouchableOpacity`
  background-color: white;
  margin: 10px;
  height: 100%;
`

const AnswerContainer = styled.View`
  flex-direction: row;
  margin: 25px 0;
`

const Answer = styled.Text`
  border-color: black;
  border-width: 1px;
  flex: 1;
  margin: 10px;
  text-align: center;
  font-size: 28px;
`

export default Cards
