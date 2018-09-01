import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, Text } from 'react-native'

import colors from '../../config/colors'

const styles = StyleSheet.create({
  text: {
    color: colors.hintText,
    fontSize: 10,
  },
})

export default class SharingInlineParticipantsList extends Component {
  static propTypes = {
    names: PropTypes.arrayOf(PropTypes.string),
  }

  static defaultProps = {
    names: [],
  }

  render() {
    const { names } = this.props

    return (
      <View>
        <Text
          style={styles.text}
        >
          {names.join(', ')}
        </Text>
      </View>
    )
  }
}
