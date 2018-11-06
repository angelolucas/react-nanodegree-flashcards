import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { withNavigation } from 'react-navigation'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Button } from '../../components'
import { colors } from '../../theme'

const Scoreboard = ({ hits, miss, onPressReset, navigation }) => (
  <View style={styles.root}>
    <View style={styles.score}>
      <Text style={styles.hits}>👍🏽 {hits}</Text>
      <Text style={styles.miss}>👎🏽 {miss}</Text>
    </View>
    <View style={styles.buttons}>
      <Button buttonStyle="light" onPress={() => navigation.navigate('Home')}>
        ↩️ Back to Deck
      </Button>
      <Button buttonStyle="light" onPress={onPressReset}>
        🔄 Restart Quiz
      </Button>
    </View>
  </View>
)

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    height: '100%',
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
