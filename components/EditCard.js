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
    const { id, question, answer } = this.props.navigation.state.params.card

    this.setState({
      id,
      question,
      answer,
    })
  }

  handleEdit = () => {
    const { goBack, state } = this.props.navigation

    goBack()
    state.params.updateCards({ ...this.state })
  }

  handleDelete = () => {
    this.props.navigation.navigate('NewDeck', {
      handleCard: {
        action: 'delete',
        id: this.state.id,
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
          <Button onPress={this.handleEdit}>Edit</Button>
        ) : (
          <Button disabled>Edit</Button>
        )}

        <Button onPress={this.handleDelete} buttonStyle="transparent">
          Delete
        </Button>
      </View>
    )
  }
}

EditCard.propTypes = { navigation: PropTypes.object }

export default EditCard
