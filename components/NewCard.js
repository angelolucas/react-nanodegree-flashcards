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
    const activeSubmit =
      this.state.question !== '' && this.state.answer !== '' ? true : false

    return (
      <View>
        <Label>Question</Label>
        <TextInput
          autoFocus
          multiline={true}
          onChangeText={question => this.setState({ question })}
          value={this.state.question}
        />

        <Label>Answer</Label>

        <TrueOrFalse
          value={this.state.answer}
          onChange={answer => this.setState({ answer })}
        />

        {activeSubmit ? (
          <Button
            onPress={() =>
              this.props.navigation.navigate('NewDeck', this.state)
            }
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
