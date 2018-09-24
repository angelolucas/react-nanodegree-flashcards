import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { View, Text, TextInput } from 'react-native'
import {
  FormLabel,
  FormInput,
  ButtonGroup,
  Button,
} from 'react-native-elements'

class NewCard extends Component {
  state = {
    question: '',
    answer: '',
  }

  render() {
    const { id, handleDelete } = this.props
    const answerOptions = ['false', 'true']
    const activeSubmit =
      this.state.question.answer !== '' && this.state.answer !== ''
        ? true
        : false

    return (
      <View>
        <Group>
          <FormLabel>Question</FormLabel>
          <FormInput
            multiline={true}
            onChangeText={question => this.setState({ question })}
          />
        </Group>

        <Group>
          <FormLabel>Answer</FormLabel>
          <ButtonGroup
            buttons={answerOptions}
            onPress={answer => this.setState({ answer })}
          />
        </Group>
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

const Group = styled.View`
  margin-bottom: 30px;
`

NewCard.propTypes = {
  id: PropTypes.number.isRequired,
  handleAdd: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
}

export default NewCard
