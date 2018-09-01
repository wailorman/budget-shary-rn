import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: -5,
    marginTop: 0,
  },
})

export default class SharingParticipantsContainer extends Component {
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
      <View style={[styles.view]}>
        {children}
      </View>
    )
  }
}
