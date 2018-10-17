import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'

class ListItem extends Component {
  render() {
    const { title, right, onPress } = this.props

    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.card}>
          <Text>{title}</Text>
          <Text>{right}</Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
})

ListItem.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string,
  right: PropTypes.string,
}

export default ListItem
