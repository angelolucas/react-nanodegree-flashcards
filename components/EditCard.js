import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { TextInput, Label, Button, TrueOrFalse } from './customComponents'

class EditCard extends Component {
  state = {
    question: '',
    answer: '',
  }

  static navigationOptions = { title: 'Edit Card' }

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
            Edit
          </Button>
        ) : (
          <Button disabled>Edit</Button>
        )}
      </View>
    )
  }
}

EditCard.propTypes = { navigation: PropTypes.object }

export default EditCard
