import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { TextInput, Label, Button } from '../customComponents'
import TrueOrFalse from './TrueOrFalse'

class NewCard extends Component {
  state = {
    question: '',
    answer: '',
  }

  UNSAFE_componentWillMount() {
    if (this.props.navigation.state.params) {
      const { question, answer } = this.props.navigation.state.params

      this.setState({
        question,
        answer,
      })
    }
  }

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

        <TrueOrFalse onChange={answer => this.setState({ answer })} />

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
