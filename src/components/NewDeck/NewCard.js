import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import { TextInput, Label } from '../form'

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
      this.state.question.answer !== '' && this.state.answer !== ''
        ? true
        : false

    return (
      <View>
        <Label>Question</Label>
        <TextInput
          multiline={true}
          onChangeText={question => this.setState({ question })}
          value={this.state.question}
        />

        <Label>Answer</Label>
        <Text onPress={() => this.setState({ answer: 'False' })}>False</Text>
        <Text onPress={() => this.setState({ answer: 'True' })}>True</Text>

        {activeSubmit ? (
          <Text
            onPress={() =>
              this.props.navigation.navigate('NewDeck', this.state)
            }
          >
            Add
          </Text>
        ) : (
          <Text> Add</Text>
        )}
      </View>
    )
  }
}

NewCard.propTypes = { navigation: PropTypes.object }

export default NewCard
