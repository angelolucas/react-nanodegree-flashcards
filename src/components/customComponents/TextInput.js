import React, { Component } from 'react'
import { TextInput as ReactNativeTextInput, StyleSheet } from 'react-native'
import { spaces, colors } from '../../theme'

class TextInput extends Component {
  render() {
    const { style, ...rest } = this.props

    return <ReactNativeTextInput {...rest} style={[styles.root, style]} />
  }
}

const styles = StyleSheet.create({
  root: {
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'white',
    margin: spaces.x1,
    marginTop: 0,
    padding: spaces.x1,
    fontSize: 16,
  },
})

export default TextInput
