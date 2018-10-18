import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { colors, spaces } from '../../theme'

export default ({ progress, steps }) => {
  const progressPercentage = `${(progress * 100) / steps}%`

  return (
    <View style={styles.root}>
      <View style={styles.progressContainer}>
        <View width={progressPercentage} style={styles.progress} />
      </View>
      <Text>
        {progress} / {steps}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
    borderBottomColor: '#DFDFE0',
    borderBottomWidth: 1,
    padding: spaces.x1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  progressContainer: {
    backgroundColor: colors.light,
    borderRadius: 3,
    marginRight: spaces.x1,
    height: 5,
    flex: 1,
  },

  progress: {
    backgroundColor: colors.details,
    borderRadius: 3,
    height: '100%',
  },
})
