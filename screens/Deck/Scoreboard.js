import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { withNavigation } from 'react-navigation'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Button } from '../../components'
import { colors } from '../../theme'

const Scoreboard = ({ hits, miss, navigation }) => (
  <View style={styles.root}>
    <View style={styles.score}>
      <Text style={styles.hits}>
        <MaterialCommunityIcons name="thumb-up" size={50} /> 3
      </Text>
      <Text style={styles.miss}>
        <MaterialCommunityIcons name="thumb-down" size={50} /> 2
      </Text>
    </View>
    <View style={styles.buttons}>
      <Button buttonStyle="light" onPress={() => navigation.navigate('Home')}>
        Back to decks
      </Button>
    </View>
  </View>
)

const styles = StyleSheet.create({
  root: {
    height: 700,
  },

  score: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  hits: {
    color: colors.success,
    fontSize: 50,
    fontWeight: 'bold',
  },

  miss: {
    color: colors.danger,
    fontSize: 50,
    fontWeight: 'bold',
  },
})

export default withNavigation(Scoreboard)
