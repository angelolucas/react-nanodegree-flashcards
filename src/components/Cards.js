import React, { Component } from 'react'
import { View } from 'react-native'
import styled from 'styled-components'

class Cards extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <QuestionCard>
          <Counter>1/10</Counter>
          <Question>Dos React Native work with Android?</Question>
        </QuestionCard>
        <AnswerContainer>
          <Answer>Incorrect</Answer>
          <Answer>Correct</Answer>
        </AnswerContainer>
      </View>
    )
  }
}

const QuestionCard = styled.View`
  background: white;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  flex: auto;
  justify-content: space-around;
`

const Counter = styled.Text`
  flex: 1;
  text-align: right;
`

const Question = styled.Text`
  font-size: 32px;
  text-align: center;
  flex: 1;
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
