import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet } from 'react-native'
import { spaces, colors } from '../../theme'

class TrueOrFalse extends Component {
  state: {
    answer: null,
  }

  handleAnswer = answer => {
    this.setState({ answer })
    this.props.onChange(answer)
  }

  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.option} onPress={() => this.handleAnswer('true')}>
          True
        </Text>
        <Text style={styles.option} onPress={() => this.handleAnswer('false')}>
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
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    padding: spaces.x1,
  },
})

TrueOrFalse.propTypes = { onChange: PropTypes.func }

export default TrueOrFalse
