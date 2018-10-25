/*
 * Card Flip by lhandel with modifications
 * https://github.com/lhandel/react-native-card-flip/blob/master/CardFlip.js
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { StyleSheet, Animated } from 'react-native'

export default class CardFlip extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      duration: 5000,
      side: 0,
      sides: [],
      progress: new Animated.Value(0),
      rotation: new Animated.ValueXY({
        x: 50,
        y: 50,
      }),
      zoom: new Animated.Value(0),
    }
  }

  componentDidMount() {
    this.setState({
      duration: this.props.duration,
      flipZoom: this.props.flipZoom,
      sides: this.props.children,
    })
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      duration: nextProps.duration,
      flipZoom: nextProps.flipZoom,
      sides: nextProps.children,
    })
  }

  flip() {
    const { side } = this.state

    this.setState({ side: side === 0 ? 1 : 0 })
    this._flipTo({
      y: 50,
      x: side === 0 ? 100 : 50,
    })
  }

  _flipTo(toValue) {
    const { duration, rotation, progress, zoom, side } = this.state

    this.props.onFlip(side === 0 ? 1 : 0)
    this.props.onFlipStart(side === 0 ? 1 : 0)
    Animated.parallel([
      Animated.timing(progress, {
        toValue: side === 0 ? 100 : 0,
        duration,
        useNativeDriver: true,
      }),
      Animated.sequence([
        Animated.timing(zoom, {
          toValue: 100,
          duration: duration / 2,
          useNativeDriver: true,
        }),
        Animated.timing(zoom, {
          toValue: 0,
          duration: duration / 2,
          useNativeDriver: true,
        }),
      ]),
      Animated.timing(rotation, {
        toValue,
        duration: duration,
        useNativeDriver: true,
      }),
    ]).start(() => {
      this.props.onFlipEnd(side === 0 ? 1 : 0)
    })
  }

  getCardATransformation() {
    //0, 50, 100
    const { progress, rotation, side } = this.state
    const sideAOpacity = progress.interpolate({
      inputRange: [50, 51],
      outputRange: [100, 0],
      extrapolate: 'clamp',
    })
    const sideATransform = {
      opacity: sideAOpacity,
      zIndex: side === 0 ? 1 : 0,
      transform: [{ perspective: this.props.perspective }],
    }

    const aXRotation = rotation.x.interpolate({
      inputRange: [0, 50, 100, 150],
      outputRange: ['-180deg', '0deg', '180deg', '0deg'],
      extrapolate: 'clamp',
    })

    sideATransform.transform.push({ rotateX: aXRotation })

    return sideATransform
  }

  getCardBTransformation() {
    const { progress, rotation, side } = this.state
    const sideBOpacity = progress.interpolate({
      inputRange: [50, 51],
      outputRange: [0, 100],
      extrapolate: 'clamp',
    })
    const sideBTransform = {
      opacity: sideBOpacity,
      zIndex: side === 0 ? 0 : 1,
      transform: [{ perspective: -1 * this.props.perspective }],
    }

    const bXRotation = rotation.x.interpolate({
      inputRange: [0, 50, 100, 150],
      outputRange: ['0deg', '-180deg', '-360deg', '180deg'],
      extrapolate: 'clamp',
    })

    sideBTransform.transform.push({ rotateX: bXRotation })

    return sideBTransform
  }

  render() {
    const { zoom, sides } = this.state
    const { flipZoom } = this.props
    // Handle cardA transformation
    const cardATransform = this.getCardATransformation()
    // Handle cardB transformation
    const cardBTransform = this.getCardBTransformation()
    // Handle cardPopup
    const cardZoom = zoom.interpolate({
      inputRange: [0, 100],
      outputRange: [1, 1 + flipZoom],
      extrapolate: 'clamp',
    })
    const scaling = { transform: [{ scale: cardZoom }] }

    return (
      <Animated.View style={[this.props.style, scaling]}>
        <Animated.View style={cardATransform}>{sides[0]}</Animated.View>
        <Animated.View style={[styles.backCard, cardBTransform]}>
          {sides[1]}
        </Animated.View>
      </Animated.View>
    )
  }
}
const styles = StyleSheet.create({
  backCard: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
})

CardFlip.defaultProps = {
  style: {},
  duration: 500,
  flipZoom: 0.09,
  perspective: 800,
  onFlip: () => {},
  onFlipStart: () => {},
  onFlipEnd: () => {},
}

CardFlip.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
    PropTypes.array,
  ]),
  duration: PropTypes.number,
  flipZoom: PropTypes.number,
  onFlip: PropTypes.func,
  onFlipEnd: PropTypes.func,
  onFlipStart: PropTypes.func,
  perspective: PropTypes.number,
}
