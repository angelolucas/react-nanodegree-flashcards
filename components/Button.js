import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { spaces, colors } from '../theme'

class Button extends Component {
  render() {
    let { children, style, buttonStyle, disabled, ...rest } = this.props

    buttonStyle = buttonStyle ? buttonStyle : 'dark'
    disabled = disabled && 'disabled'

    return (
      <View pointerEvents={disabled ? 'none' : 'auto'}>
        <Text
          {...rest}
          style={[style, styles.button, styles[buttonStyle], styles[disabled]]}
        >
          {children}
        </Text>
      </View>
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
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  light: { backgroundColor: 'white' },

  dark: {
    backgroundColor: colors.details,
    color: 'white',
  },

  transparent: {
    backgroundColor: 'transparent',
    color: colors.details,
  },

  disabled: { opacity: 0.5 },
})

export default Button
