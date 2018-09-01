import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 40,
  },
})

export default class SharingParticipantContainer extends Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    children: PropTypes.any,
  }

  static defaultProps = {
    children: null,
  }

  render() {
    const { children } = this.props

    return (
      <View style={[styles.wrapper]}>
        {children}
      </View>
    )
  }
}
