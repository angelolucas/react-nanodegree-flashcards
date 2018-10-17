import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'
import { spaces } from '../theme'

class TextInput extends Component {
  render() {
    const { children, ...rest } = this.props

    return (
      <Text {...rest} style={styles.root}>
        {children}
      </Text>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    margin: spaces.x1,
    marginBottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
})

export default TextInput
