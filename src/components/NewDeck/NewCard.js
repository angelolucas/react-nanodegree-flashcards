import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TextInput } from 'react-native'

class NewCard extends Component {
  render() {
    const { id, handleDelete } = this.props

    return (
      <View>
        <TextInput multiline={true} />
        <Text>True</Text>
        <Text>False</Text>
        <Text
          onPress={() => handleDelete(id)}
          style={{
            backgroundColor: 'red',
            padding: 5,
          }}
        >
          Delete
        </Text>
      </View>
    )
  }
}

NewCard.propTypes = {
  id: PropTypes.number.isRequired,
  handleDelete: PropTypes.func.isRequired,
}

export default NewCard
