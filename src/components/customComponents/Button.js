import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'
import { spaces, colors } from '../../theme'

class Button extends Component {
  render() {
    const { children, style, light, disabled, ...rest } = this.props
    const type = light ? 'light' : 'dark'
    const status = disabled && 'disabled'

    return (
      <Text
        {...rest}
        style={[style, styles.button, styles[type], styles[status]]}
      >
        {children}
      </Text>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.details,
    overflow: 'hidden',
    borderRadius: 5,
    padding: spaces.x1,
    margin: spaces.x1,
    marginBottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  light: { backgroundColor: 'white' },

  dark: {
    backgroundColor: colors.details,
    color: 'white',
  },

  disabled: { opacity: 0.5 },
})

export default Button