import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TextInput } from 'react-native'

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
        <Text>Question</Text>
        <TextInput
          multiline={true}
          onChangeText={question => this.setState({ question })}
          value={this.state.question}
        />

        <Text>Answer</Text>
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
