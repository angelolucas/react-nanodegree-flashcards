import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import { FormLabel, FormInput, Button } from 'react-native-elements'

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
        <FormLabel>Question</FormLabel>
        <FormInput
          multiline={true}
          onChangeText={question => this.setState({ question })}
          value={this.state.question}
        />

        <FormLabel>Answer</FormLabel>
        <Text onPress={() => this.setState({ answer: 'False' })}>False</Text>
        <Text onPress={() => this.setState({ answer: 'True' })}>True</Text>

        {activeSubmit ? (
          <Button
            title="Add"
            backgroundColor="#5895F0"
            onPress={() =>
              this.props.navigation.navigate('NewDeck', this.state)
            }
          />
        ) : (
          <Button title="Add" />
        )}
      </View>
    )
  }
}

NewCard.propTypes = { navigation: PropTypes.func }

export default NewCard
