import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet } from 'react-native'
import { spaces, colors } from '../../theme'

class TrueOrFalse extends Component {
  state = { answer: this.props.value }

  handleAnswer = answer => {
    this.setState({ answer })
    this.props.onChange(answer)
  }

  render() {
    const { answer } = this.state

    return (
      <View style={styles.root}>
        <Text
          style={[styles.option, answer === 'true' && styles.active]}
          onPress={() => this.handleAnswer('true')}
        >
          True
        </Text>
        <Text
          style={[styles.option, answer === 'false' && styles.active]}
          onPress={() => this.handleAnswer('false')}
        >
          False
        </Text>
      </View>
    )
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
    flexDirection: 'row',
  },

  option: {
    borderRadius: 5,
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    padding: spaces.x1,
    margin: 3,
    overflow: 'hidden',
  },

  active: {
    backgroundColor: colors.details,
    color: 'white',
  },
})

TrueOrFalse.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
}

export default TrueOrFalse
