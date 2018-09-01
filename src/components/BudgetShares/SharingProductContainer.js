import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native'

import commonStyles from '../../config/common-styles'
import colors from '../../config/colors'

const styles = StyleSheet.create({
  wrapper: {
    ...commonStyles.shadow,
    backgroundColor: colors.blockBackground,
    padding: 12,
    marginBottom: 8,
    borderRadius: 2,
  },
})

export default class SharingProductContainer extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  static defaultProps = {
    children: null,
  }

  render() {
    const { children } = this.props

    return (
      <View
        style={styles.wrapper}
      >
        {children}
      </View>
    )
  }
}
