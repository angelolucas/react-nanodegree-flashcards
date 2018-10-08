import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { TextInput, Label, Button, TrueOrFalse } from './customComponents'

class EditCard extends Component {
  state = {
    id: '',
    question: '',
    answer: '',
  }

  static navigationOptions = { title: 'Edit Card' }

  UNSAFE_componentWillMount() {
    const { id, question, answer } = this.props.navigation.state.params

    this.setState({
      id,
      question,
      answer,
    })
  }

  render() {
    const { question, answer } = this.state
    const { navigate } = this.props.navigation
    const activeSubmit = question !== '' && answer !== '' ? true : false

    return (
      <View>
        <Label>Question</Label>
        <TextInput
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
