import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { colors, spaces } from '../theme'

class ListItem extends Component {
  render() {
    const { title, right, onPress } = this.props

    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.card}>
          <Text style={styles.text}>{title}</Text>
          <Text style={styles.text}>
            {right}
            <View style={styles.icon}>
              <Ionicons name="ios-arrow-forward" size={20} />
            </View>
          </Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
    padding: spaces.x1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },

  text: { fontSize: 16 },

  icon: {
    height: 16,
    paddingLeft: 7,
  },
})

ListItem.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string,
  right: PropTypes.string,
}

export default ListItem
