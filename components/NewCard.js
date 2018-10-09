import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import uuid from 'uuid'
import { TextInput, Label, Button, TrueOrFalse } from './customComponents'

class NewCard extends Component {
  state = {
    id: uuid(),
    question: '',
    answer: '',
  }

  static navigationOptions = { title: 'New Card' }

  handleNewCard = () => {
    this.props.navigation.navigate('NewDeck', {
      handleCard: {
        action: 'update',
        ...this.state,
      },
    })
  }

  render() {
    const { question, answer } = this.state
    const activeSubmit = question !== '' && answer !== ''

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
          <Button onPress={this.handleNewCard}>Add</Button>
        ) : (
          <Button disabled>Add</Button>
        )}
      </View>
    )
  }
}

NewCard.propTypes = { navigation: PropTypes.object }

export default NewCard
