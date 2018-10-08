import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { TextInput, Label, Button, TrueOrFalse } from './customComponents'

class NewCard extends Component {
  state = {
    question: '',
    answer: '',
  }

  static navigationOptions = { title: 'New Card' }

  render() {
    const { question, answer } = this.state
    const { navigate } = this.props.navigation
    const activeSubmit = question !== '' && answer !== '' ? true : false

    return (
      <View>
        <Label>Question</Label>
        <TextInput
          autoFocus
          multiline={true}
          onChangeText={question => this.setState({ question })}
          value={question}
        />

        <Label>Answer</Label>
        <TrueOrFalse
          value={answer}
          onChange={answer => this.setState({ answer })}
        />

        {activeSubmit ? (
          <Button
            onPress={() => navigate('NewDeck', { handleCard: this.state })}
          >
            Add
          </Button>
        ) : (
          <Button disabled>Add</Button>
        )}
      </View>
    )
  }
}

NewCard.propTypes = { navigation: PropTypes.object }

export default NewCard
